// Check deployment status and repository connections
console.log('=== DEPLOYMENT STATUS CHECK ===\n');

const LIVE_URL = 'https://frontend-sigma-neon-14.vercel.app';

async function checkDeployment() {
  try {
    console.log('Checking live website deployment...');
    
    const response = await fetch(LIVE_URL);
    const html = await response.text();
    
    // Check which version is deployed
    console.log('=== CODE VERSION ANALYSIS ===');
    
    // Check for our cleaned code indicators
    const hasCleanedBeachesData = html.includes('// ================= EMPTY - ALL BEACHES REMOVED =================');
    const hasCleanedPlacesData = html.includes('// Empty array - no static beaches');
    const hasUpdatedAdminDashboard = html.includes('window.alert('); // Our fixed version
    
    console.log('Cleaned BeachesData.jsx found:', hasCleanedBeachesData ? '✅ YES' : '❌ NO');
    console.log('Cleaned placesData.jsx found:', hasCleanedPlacesData ? '✅ YES' : '❌ NO');
    console.log('Fixed AdminDashboard.jsx found:', hasUpdatedAdminDashboard ? '✅ YES' : '❌ NO');
    
    // Check if this is the correct repository version
    const isCorrectRepoVersion = hasCleanedBeachesData && hasCleanedPlacesData && hasUpdatedAdminDashboard;
    
    console.log('\n=== DEPLOYMENT STATUS ===');
    if (isCorrectRepoVersion) {
      console.log('✅ CORRECT VERSION IS DEPLOYED');
      console.log('✅ Live website should show empty categories');
    } else {
      console.log('❌ OLD VERSION IS STILL LIVE');
      console.log('❌ Need to push from correct repository');
    }
    
    // Check for any build errors
    if (html.includes('Application error') || html.includes('500') || html.includes('Internal Server Error')) {
      console.log('❌ BUILD/DEPLOYMENT ERROR DETECTED');
    }
    
    console.log('\n=== NEXT STEPS ===');
    if (!isCorrectRepoVersion) {
      console.log('1. Ensure you are pushing from the correct repository');
      console.log('2. Check Vercel dashboard for deployment status');
      console.log('3. Manually trigger redeploy if needed');
      console.log('4. Check environment variables');
    }
    
  } catch (error) {
    console.error('Error checking deployment:', error.message);
  }
}

checkDeployment();
