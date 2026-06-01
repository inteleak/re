const fs = require('fs');

function fixTitles(filename) {
    let content = fs.readFileSync(filename, 'utf8');

    // 1. FeatureCard Title
    content = content.replace(
        /<h3 className=\{`font-bold text-lg mb-2 text-white relative z-10 transition-colors duration-300 \$\{theme\.textHover\}`\}>\{title\}<\/h3>/g,
        `<h3 className={\`font-bold text-lg md:text-xl leading-snug mb-3 text-white relative z-20 transition-colors duration-300 \${theme.textHover}\`}>{title}</h3>`
    );

    // FeatureCard Description (z-10 to z-20)
    content = content.replace(
        /<p className="text-\[13px\] text-slate-300 leading-relaxed relative z-10 font-medium flex-grow">\{description\}<\/p>/g,
        `<p className="text-[13px] text-slate-300 leading-relaxed relative z-20 font-medium flex-grow">{description}</p>`
    );

    // 2. Guest Journey Card Padding and Title
    // Replace the -mt-12 pt-16 with -mt-12 pt-20 pb-8
    content = content.replace(
        /ring-4 -mt-12 pt-16 group-hover:-translate-y-2/g,
        `ring-4 -mt-12 pt-20 pb-6 group-hover:-translate-y-2`
    );

    // Guest Journey Title
    content = content.replace(
        /<h4 className=\{`font-bold text-lg text-white transition-colors duration-300 relative z-10 \$\{theme\.textHover\}`\}>\{step\.title\}<\/h4>/g,
        `<h4 className={\`font-bold text-lg md:text-xl leading-snug mb-3 text-white transition-colors duration-300 relative z-20 \${theme.textHover}\`}>{step.title}</h4>`
    );

    // Guest Journey Description
    content = content.replace(
        /<p className="text-\[13px\] font-medium text-slate-300 mt-3 relative z-10 leading-relaxed flex-grow">\{step\.description\}<\/p>/g,
        `<p className="text-[14px] font-medium text-slate-300 relative z-20 leading-relaxed flex-grow">{step.description}</p>`
    );

    fs.writeFileSync(filename, content);
}

fixTitles('pages/OtelCozumlerimizPage.tsx');
fixTitles('pages/OtelProjelerimizPage.tsx');
