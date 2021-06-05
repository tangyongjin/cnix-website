import React, { Component } from "react"


class MyprofileTable extends Component {


    render() {
        // console.log(this.props.value)
        
        let MyprofileDetail = this.props.value.map((item, index) => {
            return (
                <tbody key={index}>
                    <tr>
                        <td className="text-center">{item.pid}</td>
                        <td>{item.createtime}</td>
                        <td>{item.ccxname}</td>
                        <td>{item.location}</td>
                        <td>{item.bandwidth}M</td>
                        <td>{item.months}个月</td>
                        <td>{item.expirdate}</td>
                        <td>{item.ccx_vbr}</td>
                    </tr>
                </tbody>
            )
        })
        if (this.props.value.length === 0) {
            return <div></div>
        } else
            return (

                <table className="table table-bordered table-vertical-middle nomargin">
                    <thead>
                        <tr>
                            <th className="fw-30">PID</th>
                            <th>创建时间</th>
                            <th>云提供商</th>
                            <th>云节点</th>
                            <th>带宽</th>
                            <th>可用月份</th>
                            <th>过期时间</th>
                            <th>VBR</th>
                        </tr>
                    </thead>
                    {MyprofileDetail}
                </table>

            )
    }
}
export default MyprofileTable;