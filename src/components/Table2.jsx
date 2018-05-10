import React,{Component} from 'react'

class Table2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: [
                {name:'clee2',id:2,gender: 0,url:'http://baidu.com'},
                {name:'blees',id:3,gender: 1,url:'http://1.cn'},
                {name:'axlee',id:1,gender: 1,url:'http://g.cn'},
            ]
        };
        this.sort = this.sort.bind(this);
    }
    sort() {
        let rows = this.state.rows;
        rows.sort( (a, b) => a.name > b.name);
        this.setState({
            rows
        })
    }
    render() {
        return (<div>
            <h3>Table2</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th><a href="javascript:void 0" onClick={this.sort}>Name</a></th>
                        <th>Gender</th>
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