CH({slug:'appendix-bc-stats-methods',n:'B·C',part:'Appendices B and C · Reference',sub:'The headline numbers, and the statistical pipeline behind them.',end:'Findings you can check.',scenes:[
{type:'stats',title:'Appendix B: the stats, in one place',items:[{v:2,suf:'×',l:'as likely to exceed profitability, market share and productivity goals',c:'green'},{v:50,suf:'%',l:'higher market-cap growth over three years (public companies, 2014)',c:'blue'},{v:24,l:'capabilities that drive delivery performance',c:'amber'}],
 cap:['Four years of research, side by side.']},
{type:'curve',title:'The <b>J-curve</b>, in the data',xl:'time into the transformation →',yl:'performance →',legend:false,
 series:[{c:'blue',pts:line(60,x=>.42-.5*x*Math.exp(-x*5)*2.2+.5*Math.pow(x,2.2))}],
 marks:[{x:.2,y:.276,t:'The dip: automation adds complexity before it pays off',c:'amber',at:.45,dx:30,dy:40,w:620},{x:.9,y:.82,t:'Then the payoff',c:'green',at:.75,dx:-330,dy:-40,w:320}],
 cap:['In 2016, medium performers did more manual work than low performers in some areas.','Things can get worse <b>before they get better</b>.']},
{type:'bars',title:'Time on unplanned work and rework, 2016',max:40,lw:440,items:[{l:'High performers',v:21,suf:'%',c:'green'},{l:'Medium performers',v:32,suf:'%',c:'amber'},{l:'Low performers',v:27,suf:'%',c:'red'}],
 cap:['Medium performers sat in the dip of the J-curve.']},
{type:'bars',title:'More people on DevOps teams each year',max:30,lw:300,items:[{l:'2014',v:16,suf:'%',c:'blue'},{l:'2015',v:19,suf:'%',c:'blue'},{l:'2016',v:22,suf:'%',c:'blue'},{l:'2017',v:27,suf:'%',c:'teal'}],
 cap:['The share of respondents on teams that identified as DevOps teams.']},
{type:'pipeline',title:'Appendix C: four gates for every year’s data',stages:[{t:'Bias checks',d:'Chi-square, t-tests, Harman’s single factor, a marker variable.'},{t:'Constructs',d:'Validity and reliability of every measure.'},{t:'Relationships',d:'Partial least squares for 2015–17, regression for 2014.'},{t:'Groups',c:'green',d:'Ward’s clustering, checked by ANOVA and Tukey.'}],
 cap:['Think of the methods as gates the data had to pass through.']},
{type:'points',title:'Does this construct pass?',items:[
 {t:'Loadings above 0.60',d:'Items load on the construct they are meant to.'},
 {t:'AVE above 0.50',d:'Convergent validity: average variance extracted.'},
 {t:'Correlations below 0.85',d:'Discriminant validity: distinct from other constructs.'},
 {t:'Alpha and CR at least 0.70',d:'Reliability: Cronbach’s alpha and composite reliability.'}],
 cap:['A latent construct is only used if it passes validity <b>and</b> reliability tests.']},
{type:'scatter',title:'Finding high, medium and low performers',xl:'tempo →',yl:'stability →',seed:23,groups:[{n:30,cx:.82,cy:.8,sx:.045,sy:.05,c:'green',l:'High'},{n:36,cx:.48,cy:.5,sx:.05,sy:.055,c:'amber',l:'Medium'},{n:32,cx:.2,cy:.25,sx:.045,sy:.05,c:'red',l:'Low'}],
 cap:['The groups were not set by hand-picked cut-offs.','Clustering found them. Statistical tests confirmed they <b>differ on every metric</b>.']},
{type:'recap',title:'Appendices B and C on one screen',items:[{t:'Outcomes',d:'2× more likely to exceed goals.'},{t:'J-curve',d:'Manual work and rework rise before falling.'},{t:'Bias',d:'Chi-square, t-tests, Harman, marker variable.'},{t:'Constructs',d:'Loadings, AVE, discriminant validity, alpha.'},{t:'Relationships',d:'PLS and regression.'},{t:'Groups',d:'Ward’s clustering, ANOVA, Tukey.'}]}
]});
