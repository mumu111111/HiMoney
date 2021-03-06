import React from 'react';
//require 多个svg 
// require('icons/chart.svg');
// require('icons/money.svg');
// require('icons/tag.svg');
// 自动引入
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
    requireContext.keys().forEach(requireContext);
}
try { importAll(require.context('icons', true, /\.svg$/)); } catch (error) { console.log(error); }

type Props = {
    name: string
}
const Icon = (props: Props) => {
    return (
        <svg className="icon">
            <use xlinkHref={'#' + props.name} />
        </svg>
    )
}
export default Icon;