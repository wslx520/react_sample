import React,{Component} from 'react'

class Table2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'table1',
            rows: [
                {name:'clee2',id:2,gender: 0,url:'http://baidu.com'},
                {name:'blees',id:3,gender: 1,url:'http://1.cn'},
                {name:'axlee',id:1,gender: 1,url:'http://g.cn'},
            ]
        }
    }
    render() {
        return (<div>
            <h3>{this.state.name}</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.rows.map( (row, i) => (
                        <tr key={i}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.gender}</td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>)
    }
}

export default Table2