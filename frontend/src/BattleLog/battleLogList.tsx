import React, { useState } from "react";
//import 'ress';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useEffect } from "react";
import { render } from "@testing-library/react";
import { SettingsPowerRounded } from "@material-ui/icons";
import { createStyles, formatMs, Modal, Theme } from "@material-ui/core";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ja from 'date-fns/locale/ja';
import {format} from 'date-fns';
registerLocale('ja', ja);

export default function BattleLogList() {
    const classes = UseStyles();
    const [dispData, setDispData] = useState([{battledate: "", guildname: "", masterId: "", life1: "", life2: "", memo: ""}]);

    // 初期表示
    useEffect(() => {
        fetch('/getBattleLog')
         .then((res) => res.json())
         .then((data) => setDispData(data));
    }, []);

    // 検索
    let [searchGuildName, setSearchGuildname] = React.useState('');
    let [searchMasterId, setSearchMasterId] = React.useState('');
    function handleSearchGuildNameChange(e: any): void {
        setSearchGuildname(e.target.value);
    }
    function handleSearchMasterIdChange(e: any): void {
        setSearchMasterId(e.target.value);
    }
    // 検索処理
    function SearchBattleLog() {
        let sendData = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    'guildname': searchGuildName,
                    'masterId': searchMasterId
                }
            )
        }
        fetch('/searchBattleLog', sendData)
             .then((res) => res.json())
             .then((data) => setDispData(data));
    }
    // 登録
    let [battledate, setBattleDate] = useState(new Date());
    let [guildname, setGuildname] = React.useState('');
    let [masterId, setMasterId] = React.useState('');
    let [life1, setLife1] = React.useState('');
    let [life2, setLife2] = React.useState('');
    let [memo, setMemo] = React.useState('');
    const handleBattleDateChange = (date: Date) => {
        setBattleDate(date);
    }
    function handleGuildNameChange(e: any): void {
        setGuildname(e.target.value);
    }
    function handleMasterIdChange(e: any): void {
        setMasterId(e.target.value);
    }
    function handleLife1Change(e: any): void {
        setLife1(e.target.value);
    }
    function handleLife2Change(e: any): void {
        setLife2(e.target.value);
    }
    function handleMemoChange(e: any): void {
        setMemo(e.target.value);
    }
    // 登録処理
    function InsertBattleLog() {
        let formatDate = format(battledate, 'yyyy/MM/dd');
        let sendData = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    'battledate': formatDate,
                    'guildname': guildname,
                    'masterId': masterId,
                    'life1': life1,
                    'life2': life2,
                    'memo': memo
                }
            )
        }
        fetch('/insertBattleLog', sendData);
        
        handleClose();

        fetch('/getBattleLog')
        .then((res) => res.json())
        .then((data) => setDispData(data));
    }

    // レイアウト
    const [modalStyle] = React.useState(getModalStyle);
    const [labelStyle] = React.useState(getLabelStyle);
    const [buttonStyle] = React.useState(getButtonStyle);
    const [rowStyle] = React.useState(getRowStyle);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    // モーダル
    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">対戦データを登録</h2>
            <p id="simple-modal-description">
                <div>
                    <div style={rowStyle}>
                        <div style={labelStyle}>
                            <label>対戦日</label>
                        </div>
                        <DatePicker selected={battledate} onChange={handleBattleDateChange} locale="ja" dateFormat="yyyy/MM/dd" /><br></br>
                    </div>
                    <div style={labelStyle}>
                       <label>ギルド名</label>
                    </div>
                    <input type="text" value={guildname} onChange={e => handleGuildNameChange(e)} />
                    <div style={labelStyle}>
                    <label>ギルマスID</label>
                    </div>
                    <input type="text" value={masterId} onChange={e => handleMasterIdChange(e)}/><br></br>
                    <div style={labelStyle}>
                        <label>自イノチ</label>
                    </div>
                    <input type="text" value={life1} onChange={e => handleLife1Change(e)} />
                    <div style={labelStyle}>
                        <label>敵イノチ</label>
                    </div>
                    <input type="text" value={life2} onChange={e => handleLife2Change(e)}/><br></br>
                    <div style={labelStyle}>
                        <label>メモ</label>
                        <textarea value={memo} onChange={e => handleMemoChange(e)}></textarea>
                    </div>
                    
                </div>
            </p>
            <button onClick={handleClose} >閉じる</button>
            <button onClick={InsertBattleLog}>OK</button>
        </div>
    );

    // 画面
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>バトルログ</h1>
            <div>
                <label>ギルド名</label> <input type="text" value={searchGuildName} onChange={e => handleSearchGuildNameChange(e)} /> <label>ギルマスID</label> <input type="text" value={searchMasterId} onChange={e => handleSearchMasterIdChange(e)}/> <br></br>
                <div>
                    <button style={buttonStyle} onClick={SearchBattleLog}>検索</button>
                    <button style={buttonStyle} onClick={handleOpen}>登録</button>
                    <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">{body}</Modal>
                </div>
            </div>
            <br></br>
            <div>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                        <TableRow>
                            <TableCell>対戦日</TableCell>
                            <TableCell>対戦相手</TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>自イノチ</TableCell>
                            <TableCell>敵イノチ</TableCell>
                            <TableCell>編成</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {dispData.map((row) => (
                            <TableRow key={row.battledate}>
                            <TableCell component="th" scope="row">
                                {row.battledate}
                            </TableCell>
                            <TableCell>{row.guildname}</TableCell>
                            <TableCell>{row.masterId}</TableCell>
                            <TableCell>{row.life1}</TableCell>
                            <TableCell>{row.life2}</TableCell>
                            <TableCell>{row.memo}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

// 画面スタイル
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

// ラベルスタイル
function getLabelStyle() {
    const width = 100;
    return {
        width: `${width}px`,
        display: 'inline-block'

    }
}
// 列スタイル
function getRowStyle() {
    const height = 24;
    return {
        height: `${height}px`
    }
}
// ボタンスタイル
function getButtonStyle() {
    const marginRight = 10;
    return {
        marginRight: `${marginRight}px`
    }
}
// モーダルスタイル
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    const width = 600;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        width: `${width}px`,
    };
}
// グリッドスタイル
const UseStyles = makeStyles((theme: Theme) => 
    createStyles({
        table: {
            minWidth: 650,
        },
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
          },
    }
));
