const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');
    
    // Replace all py-24 with py-12
    content = content.replace(/py-24/g, 'py-12');
    
    fs.writeFileSync(filename, content);
    console.log("Updated py-24 to py-12 in", filename);
}

fix('pages/OtelCozumlerimizPage.tsx');
fix('pages/OtelProjelerimizPage.tsx');
