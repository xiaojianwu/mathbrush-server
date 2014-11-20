MathJax.Extension["TeX/AMScd"]={version:"2.4.0",config:MathJax.Hub.CombineConfig("TeX.CD",{colspace:"5pt",rowspace:"5pt",harrowsize:"2.75em",varrowsize:"1.75em",hideHorizontalLabels:!1})},MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var t=MathJax.ElementJax.mml,e=MathJax.InputJax.TeX,i=e.Stack.Item,a=e.Definitions,s=MathJax.Extension["TeX/AMScd"].config;a.environment.CD="CD_env",a.special["@"]="CD_arrow",a.macros.minCDarrowwidth="CD_minwidth",a.macros.minCDarrowheight="CD_minheight",e.Parse.Augment({CD_env:function(t){return this.Push(t),i.array().With({arraydef:{columnalign:"center",columnspacing:s.colspace,rowspacing:s.rowspace,displaystyle:!0},minw:this.stack.env.CD_minw||s.harrowsize,minh:this.stack.env.CD_minh||s.varrowsize})},CD_arrow:function(a){var n=this.string.charAt(this.i);if(!n.match(/[><VA.|=]/))return this.Other(a);this.i++;var h=this.stack.Top();(!h.isa(i.array)||h.data.length)&&this.CD_cell(a);for(var r=h.table.length%2===1,m=(h.row.length+(r?0:1))%2;m;)this.CD_cell(a),m--;var o,l={minsize:h.minw,stretchy:!0},c={minsize:h.minh,stretchy:!0,symmetric:!0,lspace:0,rspace:0};if("."===n);else if("|"===n)o=this.mmlToken(t.mo("∥").With(c));else if("="===n)o=this.mmlToken(t.mo("=").With(l));else{var p={">":"→","<":"←",V:"↓",A:"↑"}[n],d=this.GetUpTo(a+n,n),D=this.GetUpTo(a+n,n);if(">"===n||"<"===n){if(o=t.mo(p).With(l),d||(d="\\kern "+h.minw),d||D){var v={width:"+11mu",lspace:"6mu"};o=t.munderover(this.mmlToken(o)),d&&(d=e.Parse(d,this.stack.env).mml(),o.SetData(o.over,t.mpadded(d).With(v).With({voffset:".1em"}))),D&&(D=e.Parse(D,this.stack.env).mml(),o.SetData(o.under,t.mpadded(D).With(v))),s.hideHorizontalLabels&&(o=t.mpadded(o).With({depth:0,height:".67em"}))}}else o=p=this.mmlToken(t.mo(p).With(c)),(d||D)&&(o=t.mrow(),d&&o.Append(e.Parse("\\scriptstyle\\llap{"+d+"}",this.stack.env).mml()),o.Append(p.With({texClass:t.TEXCLASS.ORD})),D&&o.Append(e.Parse("\\scriptstyle\\rlap{"+D+"}",this.stack.env).mml()))}o&&this.Push(o),this.CD_cell(a)},CD_cell:function(e){var a=this.stack.Top();(a.table||[]).length%2===0&&0===(a.row||[]).length&&this.Push(t.mpadded().With({height:"8.5pt",depth:"2pt"})),this.Push(i.cell().With({isEntry:!0,name:e}))},CD_minwidth:function(t){this.stack.env.CD_minw=this.GetDimen(t)},CD_minheight:function(t){this.stack.env.CD_minh=this.GetDimen(t)}})}),MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMScd.js");