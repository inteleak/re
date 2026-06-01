const fs = require('fs');

function fix(filename) {
    let content = fs.readFileSync(filename, 'utf8');
    let search = '<div className="py-8 md:py-12 space-y-16">';
    let replace = '<div className="py-4 md:py-6 space-y-8">';
    
    if (content.indexOf(search) !== -1) {
        content = content.replace(search, replace);
        console.log("Updated spacing in", filename);
        fs.writeFileSync(filename, content);
    }
}

fix('pages/OtelCozumlerimizPage.tsx');
