import React from "react";

import Select from "react-select";

import countryOptions from "../../__json__/data/searchData.json";


let groupedOptions: any = [
    {
      label: 'Owner',
      options: [],
    },
    {
      label: 'Member',
      options: [],
    },
  ];

countryOptions.map((item,index) => {
    if(item.isOwner) {
    //   return [...groupedOptions[1].options, item]
    groupedOptions[0].options.push(item)
    }
    else
    groupedOptions[1].options.push(item)
})

const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    lineHeight: 1,
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
  };
  const customStyles = {
    option: (provided:any, state:any) => ({
      ...provided,
    }),
    control: () => ({
      width: '74rem !important'
      
    }),
    container: () => ({
        width: '74rem !important'
    })
}
  const formatGroupLabel = (data: any) => (
    <div style={groupStyles}>
         <span>{data.value}</span>
      <span>{data.label}</span>
     
      <span style={groupBadgeStyles} >{data.options.length}</span>
    </div>
  );


const ReactSelect =(props:any) => (
    <Select {...props} menuIsOpen defaultValue={[]} options={groupedOptions} isMulti formatGroupLabel={formatGroupLabel}/>
)
export default ReactSelect
