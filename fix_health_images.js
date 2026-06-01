import fs from 'fs';

let content = fs.readFileSync('pages/SaglikCozumlerimizPage.tsx', 'utf8');

content = content.replace(/hastalarinize/g, "hastalarınıza");
content = content.replace(/fa-concierge-bell/g, "fa-user-nurse");
content = content.replace(/fa-umbrella-beach/g, "fa-hospital");
content = content.replace(/fa-key/g, "fa-door-open");

const replacements = [
  // Images
  ['https://cdn.pixabay.com/video/2018/06/25/16933-277180295_large.mp4', 'https://media.istockphoto.com/id/1155981755/tr/video/bilim-insan%C4%B1-lab-bilgisayar-ekran%C4%B1nda-yapay-zeka-beyin-sim%C3%BClasyonu-%C3%BCzerinde-%C3%A7al%C4%B1%C5%9F%C4%B1yor.mp4?s=mp4-640x640-is&k=20&c=L_q1B5_53v0yTndY49Gq4f4vS0D6L2G9Y4i_GvLwSGo='],
  ['https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'],
  ['https://cdn.pixabay.com/video/2021/08/17/85264-589578135_large.mp4', 'https://media.istockphoto.com/id/1498114389/tr/video/dna-with-ai-animation.mp4?s=mp4-640x640-is&k=20&c=3iEIf5zntfIu4gGvIot3u18D1Y9s62qf94oR_wVpT4I='],
  ['https://images.unsplash.com/photo-1551882547-ff40c0d509af?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'],
  ['https://images.unsplash.com/photo-1542314831-c6a4d14d8373?q=80&w=2000&auto=format&fit=crop', 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&q=80&w=2000&auto=format&fit=crop'],
  ['https://images.unsplash.com/photo-1522798514397-e04e123610e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80', 'https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'],

  // Module images
  ['https://images.unsplash.com/photo-1551288049-bebda4e38f71', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'], // Abstract is fine
  ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3', 'https://images.unsplash.com/photo-1551076805-e1869033e561'], // Laptop
  ['https://images.unsplash.com/photo-1460925895917-afdab827c52f', 'https://images.unsplash.com/photo-1576091160550-2173dba999ef'], // Medical chart
  ['https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3', 'https://images.unsplash.com/photo-1555431189-0af5b0ad5277'], // Data

  // Ideal For images
  ['https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80'],
  ['https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=600&q=80'],
  ['https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80'],
  ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1516549655669-df83a0774514?auto=format&fit=crop&w=600&q=80'],
  ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80', 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80'],
  
];

for(const [oldStr, newStr] of replacements) {
    // Escape ? and other regex chars if we use regex, but string replacement is fine here
    content = content.replace(oldStr, newStr);
}

fs.writeFileSync('pages/SaglikCozumlerimizPage.tsx', content);
console.log('Fixed health images script run.');
