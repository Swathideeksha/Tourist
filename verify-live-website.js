// Verify that live website matches localhost
console.log('=== VERIFYING LIVE WEBSITE ===\n');

const LIVE_URL = 'https://frontend-sigma-neon-14.vercel.app';
const LOCAL_URL = 'http://localhost:3000';

async function verifyWebsite() {
  try {
    console.log('Checking live website content...');
    
    // Check live website
    const liveResponse = await fetch(LIVE_URL);
    const liveHtml = await liveResponse.text();
    
    // Check if live website shows empty state messages
    const hasEmptyBeaches = liveHtml.includes('No beaches found - Add beaches through the Admin Dashboard');
    const hasEmptyHillStations = liveHtml.includes('No hill stations found - Add hill stations through the Admin Dashboard');
    const hasEmptyHistory = liveHtml.includes('No historical places found - Add historical places through the Admin Dashboard');
    const hasEmptyReligious = liveHtml.includes('No religious places found - Add religious places through the Admin Dashboard');
    
    console.log('=== LIVE WEBSITE ANALYSIS ===');
    console.log('Empty Beaches Message:', hasEmptyBeaches ? '✅ Found' : '❌ Missing');
    console.log('Empty Hill Stations Message:', hasEmptyHillStations ? '✅ Found' : '❌ Missing');
    console.log('Empty History Message:', hasEmptyHistory ? '✅ Found' : '❌ Missing');
    console.log('Empty Religious Message:', hasEmptyReligious ? '✅ Found' : '❌ Missing');
    
    // Check for old static data
    const hasOldStaticData = liveHtml.includes('Kapu Beach') || 
                           liveHtml.includes('Kudremukh') || 
                           liveHtml.includes('Mangalore') ||
                           liveHtml.includes('Mysore');
    
    console.log('Old Static Data Found:', hasOldStaticData ? '❌ YES - Problem!' : '✅ NO - Good');
    
    // Overall status
    const isLiveWebsiteClean = hasEmptyBeaches && hasEmptyHillStations && hasEmptyHistory && hasEmptyReligious && !hasOldStaticData;
    
    console.log('\n=== OVERALL STATUS ===');
    if (isLiveWebsiteClean) {
      console.log('✅ LIVE WEBSITE IS CLEAN - Matches localhost!');
      console.log('✅ Ready for admin uploads');
    } else {
      console.log('❌ LIVE WEBSITE NEEDS ATTENTION:');
      if (hasOldStaticData) {
        console.log('   • Old static data still showing');
      }
      if (!hasEmptyBeaches) console.log('   • Beaches not showing empty state');
      if (!hasEmptyHillStations) console.log('   • Hill stations not showing empty state');
      if (!hasEmptyHistory) console.log('   • History not showing empty state');
      if (!hasEmptyReligious) console.log('   • Religious not showing empty state');
    }
    
    console.log('\n=== RECOMMENDATIONS ===');
    if (!isLiveWebsiteClean) {
      console.log('1. Check Vercel deployment status');
      console.log('2. Clear browser cache: Ctrl+F5');
      console.log('3. Check if build succeeded');
      console.log('4. Verify correct repository is deployed');
    }
    
  } catch (error) {
    console.error('Error checking live website:', error.message);
  }
}

verifyWebsite();
