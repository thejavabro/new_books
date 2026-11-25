/* Chapter list and helpers shared by every animated page. */
const BOOK='Accelerate';
const ORDER=[['ch01-accelerate','Chapter 1','Accelerate'],['ch02-measuring-performance','Chapter 2','Measuring Performance'],['ch03-measuring-culture','Chapter 3','Measuring and Changing Culture'],['ch04-technical-practices','Chapter 4','Technical Practices'],['ch05-architecture','Chapter 5','Architecture'],['ch06-infosec','Chapter 6','Integrating Infosec'],['ch07-management-practices','Chapter 7','Management Practices'],['ch08-product-development','Chapter 8','Product Development'],['ch09-sustainable-work','Chapter 9','Making Work Sustainable'],['ch10-satisfaction-identity','Chapter 10','Satisfaction, Identity and Engagement'],['ch11-leaders-managers','Chapter 11','Leaders and Managers'],['ch12-science','Chapter 12','The Science Behind the Book'],['ch13-psychometrics','Chapter 13','Introduction to Psychometrics'],['ch14-why-survey','Chapter 14','Why Use a Survey'],['ch15-data','Chapter 15','The Data for the Project'],['ch16-leadership-ing','Chapter 16','High-Performance Leadership and Management'],['appendix-a-capabilities','Appendix A','Capabilities to Drive Improvement'],['appendix-bc-stats-methods','Appendices B\u2013C','The Stats and the Methods']];
const line=(n,f)=>Array.from({length:n+1},(_,i)=>[i/n,f(i/n)]);
function CH(c){
  const i=ORDER.findIndex(o=>o[0]===c.slug),o=ORDER[i],nx=ORDER[i+1];
  const credit='Accelerate \u00b7 Forsgren, Humble & Kim \u00b7 original visual summary';
  const scenes=[{type:'title',n:c.n,part:c.part,title:o[2],sub:c.sub,acc:'blue'}].concat(c.scenes,[{type:'outro',line:c.end,next:nx?nx[1]+' \u00b7 '+nx[2]:null,acc:'teal'}]);
  window.SPEC={kick:BOOK+' \u00b7 '+o[1]+' \u00b7 '+o[2],credit,scenes};
}
