import { execSync } from 'child_process';
try {
  execSync('git checkout constants.tsx');
  console.log('Restored constants.tsx');
} catch (e) {
  console.log(e.message);
}
