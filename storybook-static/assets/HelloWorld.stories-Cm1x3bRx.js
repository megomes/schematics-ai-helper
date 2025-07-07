import{j as e}from"./jsx-runtime-CDt2p4po.js";import"./index-GiUgBvb1.js";function I({text:P="Circuit AI Assistant",className:T="",variant:w="default"}){const D=()=>{switch(w){case"primary":return"text-white hover:text-primary-300";case"circuit":return"text-white hover:text-circuit-highlight";case"ai":return"text-white hover:text-ai-thinking";default:return"text-white hover:text-primary-400"}};return e.jsxs("div",{className:"space-y-4 text-center",children:[e.jsx("h1",{className:`font-display text-4xl font-bold leading-tight transition-colors duration-300 ${D()} ${T}`,children:P}),e.jsxs("div",{className:"flex justify-center gap-4 font-mono text-sm",children:[e.jsx("span",{className:"circuit-input",children:"Input"}),e.jsx("span",{className:"text-gray-400",children:"→"}),e.jsx("span",{className:"circuit-signal",children:"Process"}),e.jsx("span",{className:"text-gray-400",children:"→"}),e.jsx("span",{className:"circuit-output",children:"Output"})]}),e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("div",{className:"card p-2 text-xs",children:e.jsx("div",{className:"ai-claude",children:"Claude"})}),e.jsx("div",{className:"card p-2 text-xs",children:e.jsx("div",{className:"ai-chatgpt",children:"ChatGPT"})}),e.jsx("div",{className:"card p-2 text-xs",children:e.jsx("div",{className:"ai-thinking",children:"Processing"})})]})]})}I.__docgenInfo={description:"",methods:[],displayName:"HelloWorld",props:{text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Circuit AI Assistant'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'circuit' | 'ai'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'circuit'"},{name:"literal",value:"'ai'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};const W={title:"Components/HelloWorld",component:I,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#0a0a0a"},{name:"light",value:"#f9fafb"}]}},tags:["autodocs"],argTypes:{text:{control:"text",description:"The text to display"},className:{control:"text",description:"Additional CSS classes"},variant:{control:"select",options:["default","primary","circuit","ai"],description:"Visual variant style"}}},t={args:{text:"Circuit AI Assistant",variant:"default"}},a={args:{text:"Circuit AI Assistant",variant:"primary"}},s={args:{text:"Signal Processing",variant:"circuit"}},r={args:{text:"AI Processing",variant:"ai"}},i={args:{text:"Design System Demo",variant:"primary"}},n={args:{text:"Custom Styled",variant:"circuit",className:"text-6xl"}};var c,o,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: 'Circuit AI Assistant',
    variant: 'default'
  }
}`,...(l=(o=t.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var u,d,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'Circuit AI Assistant',
    variant: 'primary'
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,x,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'Signal Processing',
    variant: 'circuit'
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,v,f;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    text: 'AI Processing',
    variant: 'ai'
  }
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,N,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    text: 'Design System Demo',
    variant: 'primary'
  }
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var C,A,S;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: 'Custom Styled',
    variant: 'circuit',
    className: 'text-6xl'
  }
}`,...(S=(A=n.parameters)==null?void 0:A.docs)==null?void 0:S.source}}};const _=["Default","Primary","Circuit","AI","CustomText","WithCustomStyles"];export{r as AI,s as Circuit,i as CustomText,t as Default,a as Primary,n as WithCustomStyles,_ as __namedExportsOrder,W as default};
