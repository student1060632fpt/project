import React, { Component } from 'react';
import MaterialTable from 'material-table';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import { forwardRef } from 'react';
import { connect } from 'react-redux';
import * as action from "../../redux/action";

class AdminQuanLyLichChieu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { title: 'Mã phim', field: 'maPhim' },
                { title: 'Tên phim', field: 'tenPhim' },
                { title: 'Bí danh', field: 'biDanh' },
                { title: 'Trailer', field: 'trailer' },
                {
                    title: 'Hình ảnh',
                    field: 'hinhAnh',
                    type: "url",
                    editComponent: props => <input type="file" onChange={e => props.onChange(e.target.files[0])}/>,
                    render: rowData => <img src={rowData.hinhAnh} style={{ width: 100 }} />
                },
                { title: 'Mô tả', field: 'moTa' },
                { title: 'Mã nhóm', field: 'maNhom' },
                { title: 'Ngày khởi chiếu', field: 'ngayKhoiChieu' },
                { title: 'Đánh giá', field: 'danhGia' }
            ],
            data: this.props.list,
        }
    }

    componentDidMount() {
        this.props.getDSND();

        setTimeout(() => {
            this.setState({
                data: this.props.list
            })
        }, 2000);
    }

    renderData = () => {
        if (this.props.list) {
            this.setState({
                data: this.props.list
            })
        }
    }

    

    putDSND = data => {
        // this.props.putDSND(data);
    }

    render() {
        let tableIcons = {
            Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
            Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
            Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
            Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
            DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
            Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
            Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
            Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
            FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
            LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
            NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
            PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
            ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
            Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
            SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
            ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
            ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
        };
        // console.log(this.z)
        return (
            <>
                <MaterialTable
                    icons={tableIcons}
                    title="Editable Example"
                    columns={this.state.columns}
                    data={this.state.data}
                    editable={{
                        onRowAdd: (newData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve();
                                    this.handleAdd(newData);
                                    this.setState((prevState) => {
                                        const data = [...prevState.data];
                                        data.push(newData);
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve();
                                    if (oldData) {
                                        this.setState((prevState) => {
                                            const data = [...prevState.data];
                                            data[data.indexOf(oldData)] = newData;
                                            this.putDSND(newData);
                                            return { ...prevState, data };
                                        });
                                    }
                                }, 600);
                            }),
                        onRowDelete: (oldData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve();
                                    this.setState((prevState) => {
                                        const data = [...prevState.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                    }}
                />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.movieReducer.listMovie || [{
            maPhim: 1314,
            tenPhim: "stringHelo2321312asdasda adasd",
            biDanh: "stringhelo2321312asdasda-adasd",
            trailer: "string",
            hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/stringhelo2321312asdasda-adasd_GP07.jpeg?alt=media",
            moTa: "string",
            maNhom: "GP07",
            ngayKhoiChieu: "2020-02-06T00:00:00",
            danhGia: 5
        }]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDSND: () => {
            dispatch(action.actGetListMovieAPI({}))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminQuanLyLichChieu);