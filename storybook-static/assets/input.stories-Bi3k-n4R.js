import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as oe}from"./index-GiUgBvb1.js";import{c as ce}from"./utils-__oq1Ql0.js";import{L as a}from"./label-bWQbbNz2.js";import"./index-CROobee-.js";const s=oe.forwardRef(({className:r,type:se,...ae},te)=>e.jsx("input",{type:se,className:ce("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:te,...ae}));s.displayName="Input";s.__docgenInfo={description:"",methods:[],displayName:"Input"};const me={title:"UI/Input",component:s,parameters:{layout:"centered",docs:{description:{component:"Displays a form input field or a component that looks like an input field."}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","search","number","tel","url"],description:"The type of input"},placeholder:{control:"text",description:"Placeholder text"},disabled:{control:"boolean",description:"When true, prevents the user from interacting with the input"},"aria-invalid":{control:"boolean",description:"Indicates whether the input value is valid"}}},t={args:{placeholder:"Type something..."}},o={render:r=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(a,{htmlFor:"email",children:"Email"}),e.jsx(s,{type:"email",id:"email",placeholder:"Email",...r})]})},c={args:{placeholder:"Type something...",disabled:!0}},n={args:{value:"Hello World",placeholder:"Type something..."}},i={args:{type:"email",placeholder:"Enter your email..."}},l={args:{type:"password",placeholder:"Enter your password..."}},d={args:{type:"search",placeholder:"Search components..."}},p={args:{type:"number",placeholder:"Enter voltage value..."}},m={render:r=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(a,{htmlFor:"error-input",children:"Component Value"}),e.jsx(s,{id:"error-input",type:"text",placeholder:"Enter value...",className:"border-destructive focus-visible:ring-destructive","aria-invalid":"true",...r}),e.jsx("p",{className:"text-sm text-destructive",children:"Please enter a valid value."})]})},u={render:r=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(a,{htmlFor:"success-input",children:"Component Value"}),e.jsx(s,{id:"success-input",type:"text",value:"5V",className:"border-green-500 focus-visible:ring-green-500",...r}),e.jsx("p",{className:"text-sm text-green-500",children:"Value is valid."})]})},g={render:r=>e.jsxs("div",{className:"grid w-full max-w-md items-center gap-1.5",children:[e.jsx(a,{htmlFor:"circuit-desc",children:"Circuit Description"}),e.jsx(s,{id:"circuit-desc",type:"text",placeholder:"Describe your circuit (e.g., 'Oscillator for Eurorack')...",className:"w-full",...r}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Describe what you want to build and let AI help you design it."})]})},h={render:r=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(a,{htmlFor:"component-search",children:"Find Components"}),e.jsx(s,{id:"component-search",type:"search",placeholder:"Search OpAmp, resistor, capacitor...",...r})]})},x={render:r=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(a,{htmlFor:"project-name",children:"Project Name"}),e.jsx(s,{id:"project-name",type:"text",placeholder:"My Awesome Circuit",...r})]})};var b,v,f;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type something...'
  }
}`,...(f=(v=t.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,w,N;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" {...args} />
    </div>
}`,...(N=(w=o.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var j,S,E;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type something...',
    disabled: true
  }
}`,...(E=(S=c.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var L,I,C;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    value: 'Hello World',
    placeholder: 'Type something...'
  }
}`,...(C=(I=n.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var F,D,V;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: 'email',
    placeholder: 'Enter your email...'
  }
}`,...(V=(D=i.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var P,T,W;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter your password...'
  }
}`,...(W=(T=l.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var k,A,O;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    type: 'search',
    placeholder: 'Search components...'
  }
}`,...(O=(A=d.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var _,H,M;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: 'Enter voltage value...'
  }
}`,...(M=(H=p.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var R,U,q;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="error-input">Component Value</Label>
      <Input id="error-input" type="text" placeholder="Enter value..." className="border-destructive focus-visible:ring-destructive" aria-invalid="true" {...args} />
      <p className="text-sm text-destructive">Please enter a valid value.</p>
    </div>
}`,...(q=(U=m.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var z,B,G;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="success-input">Component Value</Label>
      <Input id="success-input" type="text" value="5V" className="border-green-500 focus-visible:ring-green-500" {...args} />
      <p className="text-sm text-green-500">Value is valid.</p>
    </div>
}`,...(G=(B=u.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => <div className="grid w-full max-w-md items-center gap-1.5">
      <Label htmlFor="circuit-desc">Circuit Description</Label>
      <Input id="circuit-desc" type="text" placeholder="Describe your circuit (e.g., 'Oscillator for Eurorack')..." className="w-full" {...args} />
      <p className="text-xs text-muted-foreground">
        Describe what you want to build and let AI help you design it.
      </p>
    </div>
}`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: args => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="component-search">Find Components</Label>
      <Input id="component-search" type="search" placeholder="Search OpAmp, resistor, capacitor..." {...args} />
    </div>
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,re;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="project-name">Project Name</Label>
      <Input id="project-name" type="text" placeholder="My Awesome Circuit" {...args} />
    </div>
}`,...(re=(ee=x.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const ue=["Default","WithLabel","Disabled","WithValue","Email","Password","Search","Number","Error","Success","CircuitDescription","ComponentSearch","ProjectName"];export{g as CircuitDescription,h as ComponentSearch,t as Default,c as Disabled,i as Email,m as Error,p as Number,l as Password,x as ProjectName,d as Search,u as Success,o as WithLabel,n as WithValue,ue as __namedExportsOrder,me as default};
