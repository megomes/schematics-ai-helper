import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as d}from"./index-GiUgBvb1.js";import{c as he}from"./utils-__oq1Ql0.js";import{B as L}from"./button-BwnA9Lo6.js";import{c as ce,X as be}from"./x-CkWKXNMt.js";import{L as o}from"./label-bWQbbNz2.js";import"./index-CROobee-.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]],ge=ce("file",fe);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],ve=ce("upload",je),s=d.forwardRef(({className:t,onFileSelect:a,showFileName:r=!0,clearable:u=!0,buttonText:T="Choose File",buttonVariant:c="outline",onChange:l,...p},C)=>{const[i,I]=d.useState(null),de=d.useRef(null),n=C||de,ue=w=>{const S=w.target.files;I(S),a==null||a(S),l==null||l(w)},pe=()=>{I(null),n&&"current"in n&&n.current&&(n.current.value=""),a==null||a(null)},me=()=>{n&&"current"in n&&n.current&&n.current.click()},xe=()=>i?i.length===1?i[0].name:`${i.length} files selected`:"";return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(L,{type:"button",variant:c,onClick:me,className:"flex items-center gap-2",children:[e.jsx(ve,{className:"h-4 w-4"}),T]}),r&&i&&e.jsxs("div",{className:"flex items-center gap-2 text-sm text-muted-foreground",children:[e.jsx(ge,{className:"h-4 w-4"}),e.jsx("span",{className:"truncate max-w-[200px]",children:xe()}),u&&e.jsx(L,{type:"button",variant:"ghost",size:"sm",onClick:pe,className:"h-auto p-1 text-muted-foreground hover:text-foreground",children:e.jsx(be,{className:"h-3 w-3"})})]})]}),e.jsx("input",{type:"file",ref:n,className:he("sr-only",t),onChange:ue,...p})]})});s.displayName="FileInput";s.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{onFileSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList | null) => void",signature:{arguments:[{type:{name:"union",raw:"FileList | null",elements:[{name:"FileList"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:""},showFileName:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},clearable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Choose File'",computed:!1}},buttonVariant:{required:!1,tsType:{name:"union",raw:"'default' | 'outline' | 'secondary' | 'ghost'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"}]},description:"",defaultValue:{value:"'outline'",computed:!1}}},composes:["Omit"]};const Ve={title:"UI/FileInput",component:s,parameters:{layout:"centered",docs:{description:{component:"A styled file input component that uses button styling instead of native file input appearance."}}},tags:["autodocs"],argTypes:{buttonVariant:{control:"select",options:["default","outline","secondary","ghost"],description:"Button style variant"},showFileName:{control:"boolean",description:"Show selected file name"},clearable:{control:"boolean",description:"Show clear button when file is selected"},buttonText:{control:"text",description:"Text displayed on the button"},multiple:{control:"boolean",description:"Allow multiple file selection"},accept:{control:"text",description:"File types to accept"}}},m={args:{buttonText:"Choose File"}},x={render:t=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(o,{htmlFor:"file-input",children:"Upload Document"}),e.jsx(s,{id:"file-input",...t})]}),args:{buttonText:"Browse Files"}},h={args:{multiple:!0,buttonText:"Select Files"}},b={args:{accept:".json,.xml,.txt",buttonText:"Import Circuit"}},f={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(o,{children:"Default Button"}),e.jsx(s,{buttonVariant:"default",buttonText:"Upload File"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(o,{children:"Outline Button"}),e.jsx(s,{buttonVariant:"outline",buttonText:"Choose File"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(o,{children:"Secondary Button"}),e.jsx(s,{buttonVariant:"secondary",buttonText:"Browse"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(o,{children:"Ghost Button"}),e.jsx(s,{buttonVariant:"ghost",buttonText:"Select"})]})]})},g={args:{showFileName:!1,buttonText:"Upload"}},j={args:{clearable:!1,buttonText:"Select File"}},ye=()=>{const[t,a]=d.useState("");return e.jsxs("div",{className:"space-y-4 w-96",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(o,{htmlFor:"circuit-import",children:"Import Circuit Design"}),e.jsx(s,{id:"circuit-import",accept:".json,.xml,.spice,.cir",buttonText:"Import Circuit",buttonVariant:"default",onFileSelect:r=>{r&&r.length>0?a(r[0].name):a("")}}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Supported formats: JSON, XML, SPICE, CIR"})]}),t&&e.jsx("div",{className:"p-3 bg-green-500/10 border border-green-500/20 rounded-md",children:e.jsxs("p",{className:"text-sm text-green-700 dark:text-green-400",children:["Ready to import: ",t]})})]})},v={render:()=>e.jsx(ye,{})},y={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(o,{htmlFor:"export-location",children:"Save Circuit As"}),e.jsx(s,{id:"export-location",buttonText:"Choose Location",buttonVariant:"outline",accept:".json"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Export your circuit design as JSON"})]})},N={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(o,{htmlFor:"component-lib",children:"Import Component Library"}),e.jsx(s,{id:"component-lib",multiple:!0,accept:".json,.lib",buttonText:"Add Components",buttonVariant:"secondary"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Import custom component definitions and libraries"})]})},Ne=()=>{const[t,a]=d.useState(null),[r,u]=d.useState(""),T=c=>{if(a(c),c&&c.length>0){const l=c[0];if(l.type==="text/plain"||l.name.endsWith(".json")){const p=new FileReader;p.onload=C=>{var i;u(((i=C.target)==null?void 0:i.result)||"")},p.readAsText(l)}else u("")}else u("")};return e.jsxs("div",{className:"space-y-4 w-96",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(o,{children:"Upload and Preview"}),e.jsx(s,{accept:".txt,.json",buttonText:"Choose Text File",onFileSelect:T})]}),t&&t.length>0&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium",children:"File Info:"}),e.jsxs("div",{className:"text-xs text-muted-foreground space-y-1",children:[e.jsxs("p",{children:["Name: ",t[0].name]}),e.jsxs("p",{children:["Size: ",(t[0].size/1024).toFixed(2)," KB"]}),e.jsxs("p",{children:["Type: ",t[0].type||"Unknown"]})]})]}),r&&e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-medium",children:"Preview:"}),e.jsxs("div",{className:"p-3 bg-muted rounded-md max-h-32 overflow-auto",children:[e.jsx("pre",{className:"text-xs whitespace-pre-wrap",children:r.slice(0,500)}),r.length>500&&e.jsx("p",{className:"text-xs text-muted-foreground mt-2",children:"... (truncated)"})]})]})]})},F={render:()=>e.jsx(Ne,{})};var V,B,k;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    buttonText: 'Choose File'
  }
}`,...(k=(B=m.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var E,U,A;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="file-input">Upload Document</Label>
      <FileInput id="file-input" {...args} />
    </div>,
  args: {
    buttonText: 'Browse Files'
  }
}`,...(A=(U=x.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var D,q,R;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    multiple: true,
    buttonText: 'Select Files'
  }
}`,...(R=(q=h.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var _,M,O;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    accept: '.json,.xml,.txt',
    buttonText: 'Import Circuit'
  }
}`,...(O=(M=b.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var W,z,J;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="space-y-2">
        <Label>Default Button</Label>
        <FileInput buttonVariant="default" buttonText="Upload File" />
      </div>
      <div className="space-y-2">
        <Label>Outline Button</Label>
        <FileInput buttonVariant="outline" buttonText="Choose File" />
      </div>
      <div className="space-y-2">
        <Label>Secondary Button</Label>
        <FileInput buttonVariant="secondary" buttonText="Browse" />
      </div>
      <div className="space-y-2">
        <Label>Ghost Button</Label>
        <FileInput buttonVariant="ghost" buttonText="Select" />
      </div>
    </div>
}`,...(J=(z=f.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var P,G,H;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    showFileName: false,
    buttonText: 'Upload'
  }
}`,...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var X,$,K;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    clearable: false,
    buttonText: 'Select File'
  }
}`,...(K=($=j.parameters)==null?void 0:$.docs)==null?void 0:K.source}}};var Z,Q,Y;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <ImportCircuitComponent />
}`,...(Y=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var ee,te,se;y.parameters={...y.parameters,docs:{...(ee=y.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Label htmlFor="export-location">Save Circuit As</Label>
      <FileInput id="export-location" buttonText="Choose Location" buttonVariant="outline" accept=".json" />
      <p className="text-xs text-muted-foreground">
        Export your circuit design as JSON
      </p>
    </div>
}`,...(se=(te=y.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ae,re,ne;N.parameters={...N.parameters,docs:{...(ae=N.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Label htmlFor="component-lib">Import Component Library</Label>
      <FileInput id="component-lib" multiple accept=".json,.lib" buttonText="Add Components" buttonVariant="secondary" />
      <p className="text-xs text-muted-foreground">
        Import custom component definitions and libraries
      </p>
    </div>
}`,...(ne=(re=N.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,ie,le;F.parameters={...F.parameters,docs:{...(oe=F.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <InteractiveExample />
}`,...(le=(ie=F.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};const Be=["Default","WithLabel","MultipleFiles","WithAcceptFilter","DifferentVariants","WithoutFileName","NotClearable","ImportCircuit","ExportTarget","ComponentLibrary","Interactive"];export{N as ComponentLibrary,m as Default,f as DifferentVariants,y as ExportTarget,v as ImportCircuit,F as Interactive,h as MultipleFiles,j as NotClearable,b as WithAcceptFilter,x as WithLabel,g as WithoutFileName,Be as __namedExportsOrder,Ve as default};
