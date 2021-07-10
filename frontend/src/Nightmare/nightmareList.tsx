import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Select from 'react-select';

interface NightmareData {
    name: string;
    maiyuki: string;
    gorilla: string;
    saq: string;
    ma: string;
    otto: string;
    kinoko: string;
    laurent: string;
    happylunch: string;
    eri: string;
    yoa: string;
    piyoko: string;
    raipachi: string;
    kii: string;
    chihuahua: string;
    wabosy: string};

export default function NightmareList() {
    const classes = UseStyles();
    //const [dispData, setDispData] = useState([{name: "", maiyuki: "", gorilla: "", saq: "", ma: "", otto: "", kinoko: "", laurent: "", happylunch: "", eri: "", yoa: "", piyoko: "", raipachi: "", kii: "", chihuahua: "", wabosy: ""}]);
    let [dispData, setDispData] = useState<NightmareData[]>([]);
    let [chargeData, setChargeData] = useState<NightmareData[]>([]);
    const [nightmare, setNightmare] = useState('');
    const [nightmareIndex, setNightmareIndex] = useState(0);

    // 初期表示
    useEffect(() => {
        fetch('/getNightmareList')
         .then((res) => res.json())
         .then((data) => setDispData(data));
    }, []);

    chargeData = dispData.slice(0, 1);
    dispData = dispData.slice(1);
    
    if (chargeData.length != 0) {
        chargeData[0].maiyuki = "";
        chargeData[0].gorilla = "";
        chargeData[0].saq = "";
        chargeData[0].ma = "";
        chargeData[0].otto = "";
        chargeData[0].kinoko = "";
        chargeData[0].laurent = "";
        chargeData[0].happylunch = "";
        chargeData[0].eri = "";
        chargeData[0].yoa = "";
        chargeData[0].piyoko = "";
        chargeData[0].raipachi = "";
        chargeData[0].kii = "";
        chargeData[0].chihuahua = "";
        chargeData[0].wabosy = "";
        for (let i = 0; i < dispData.length; i++) {
            if (dispData[i].maiyuki == '2') {
                chargeData[0].maiyuki = chargeData[0].maiyuki + dispData[i].name + "\n";
            }
            if (dispData[i].gorilla == '2') {
                chargeData[0].gorilla = chargeData[0].gorilla + dispData[i].name + "\n";
            }
            if (dispData[i].saq == '2') {
                chargeData[0].saq = chargeData[0].saq + dispData[i].name + "\n";
            }
            if (dispData[i].ma == '2') {
                chargeData[0].ma = chargeData[0].ma + dispData[i].name + "\n";
            }
            if (dispData[i].otto == '2') {
                chargeData[0].otto = chargeData[0].otto + dispData[i].name + "\n";
            }
            if (dispData[i].kinoko == '2') {
                chargeData[0].kinoko = chargeData[0].kinoko + dispData[i].name + "\n";
            }
            if (dispData[i].laurent == '2') {
                chargeData[0].laurent = chargeData[0].laurent + dispData[i].name + "\n";
            }
            if (dispData[i].happylunch == '2') {
                chargeData[0].happylunch = chargeData[0].happylunch + dispData[i].name + "\n";
            }
            if (dispData[i].eri == '2') {
                chargeData[0].eri = chargeData[0].eri + dispData[i].name + "\n";
            }
            if (dispData[i].yoa == '2') {
                chargeData[0].yoa = chargeData[0].yoa + dispData[i].name + "\n";
            }
            if (dispData[i].piyoko == '2') {
                chargeData[0].piyoko = chargeData[0].piyoko + dispData[i].name + "\n";
            }
            if (dispData[i].raipachi == '2') {
                chargeData[0].raipachi = chargeData[0].raipachi + dispData[i].name + "\n";
            }
            if (dispData[i].kii == '2') {
                chargeData[0].kii = chargeData[0].kii + dispData[i].name + "\n";
            }
            if (dispData[i].chihuahua == '2') {
                chargeData[0].chihuahua = chargeData[0].chihuahua + dispData[i].name + "\n";
            }
            if (dispData[i].wabosy == '2') {
                chargeData[0].wabosy = chargeData[0].wabosy + dispData[i].name + "\n";
            }
        }
    }    

    function handleNightmareChange(index: number, e: any, member: string): void {
        setNightmare(e.target.value);
        setNightmareIndex(index);
        //console.log(nightmare, e.target.value);
        let sendData = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    'index': index + 2,
                    'member': member,
                    'nightmare': Number(e.target.value)
                }
            )
        }
        fetch('/updateNightmareList', sendData);
        if (member == 'maiyuki') {
            dispData[index].maiyuki = e.target.value;
        } else if (member == 'gorilla') {
            dispData[index].gorilla = e.target.value;
        } else if (member == 'saq') {
            dispData[index].saq = e.target.value;
        } else if (member == 'ma') {
            dispData[index].ma = e.target.value;
        } else if (member == 'otto') {
            dispData[index].otto = e.target.value;
        } else if (member == 'kinoko') {
            dispData[index].kinoko = e.target.value;
        } else if (member == 'laurent') {
            dispData[index].laurent = e.target.value;
        } else if (member == 'happylunch') {
            dispData[index].happylunch = e.target.value;
        } else if (member == 'eri') {
            dispData[index].eri = e.target.value;
        } else if (member == 'yoa') {
            dispData[index].yoa = e.target.value;
        } else if (member == 'piyoko') {
            dispData[index].piyoko = e.target.value;
        } else if (member == 'raipachi') {
            dispData[index].raipachi = e.target.value;
        } else if (member == 'kii') {
            dispData[index].kii = e.target.value;
        } else if (member == 'chihuahua') {
            dispData[index].chihuahua = e.target.value;
        } else if (member == 'wabosy') {
            dispData[index].wabosy = e.target.value;
        }
    }

    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <h1>ナイトメアリスト</h1>
            </div>
            <div>
                <TableContainer component={Paper} className={classes.container}>
                        <Table className={classes.table} aria-label="a dense table" stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ fontSize: 5}}>名前</TableCell>
                                    <TableCell style={{ fontSize: 5}}>まいゆき</TableCell>
                                    <TableCell style={{ fontSize: 5}}>ゴリラ</TableCell>
                                    <TableCell style={{ fontSize: 5}}>Saq</TableCell>
                                    <TableCell style={{ fontSize: 5}}>まー</TableCell>
                                    <TableCell style={{ fontSize: 5}}>おっとー</TableCell>
                                    <TableCell style={{ fontSize: 5}}>きのこ</TableCell>
                                    <TableCell style={{ fontSize: 5}}>ローラン</TableCell>
                                    <TableCell style={{ fontSize: 5}}>はぴらん</TableCell>
                                    <TableCell style={{ fontSize: 5}}>えり</TableCell>
                                    <TableCell style={{ fontSize: 5}}>よあ</TableCell>
                                    <TableCell style={{ fontSize: 5}}>ぴよこ</TableCell>
                                    <TableCell style={{ fontSize: 5}}>ライパチ</TableCell>
                                    <TableCell style={{ fontSize: 5}}>きい</TableCell>
                                    <TableCell style={{ fontSize: 5}}>ﾁﾜﾜﾜﾝ</TableCell>
                                    <TableCell style={{ fontSize: 5}}>わぼし</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {chargeData.map((row) => (
                                    <TableRow key={row.name} style={{ backgroundColor: '#f0e68c'}}>
                                        <TableCell component="th" scope="row"  style={{ fontSize: 5}}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell style={{ fontSize: 5}}>{row.maiyuki}</TableCell>
                                        <TableCell style={{ fontSize: 5}}>{row.gorilla}</TableCell>
                                        <TableCell style={{ fontSize: 5}}>{row.saq}</TableCell>
                                        <TableCell style={{ fontSize: 5}}>{row.ma}</TableCell>
                                        <TableCell style={{ fontSize: 5}}>{row.otto}</TableCell>
                                        <TableCell style={{ fontSize: 5}}>{row.kinoko}</TableCell>
                                        <TableCell style={{ fontSize: 5}}>{row.laurent}</TableCell>
                                        <TableCell style={{ fontSize: 5}}>{row.happylunch}</TableCell>
                                        <TableCell style={{ fontSize: 5}}>{row.eri}</TableCell>
                                        <TableCell style={{ fontSize: 5}}>{row.yoa}</TableCell>
                                        <TableCell style={{ fontSize: 5}}>{row.piyoko}</TableCell>
                                        <TableCell style={{ fontSize: 5}}>{row.raipachi}</TableCell>
                                        <TableCell style={{ fontSize: 5}}>{row.kii}</TableCell>
                                        <TableCell style={{ fontSize: 5}}>{row.chihuahua}</TableCell>
                                        <TableCell style={{ fontSize: 5}}>{row.wabosy}</TableCell>
                                    </TableRow>
                                ))}
                                {dispData.map((row, i) => (
                                    <TableRow hover key={row.name}>
                                        <TableCell component="th" scope="row"  style={{ fontSize: 5}}>
                                            {row.name}
                                        </TableCell>
                                        <TableCell style={{ fontSize: 5, backgroundColor: cellColor(row.maiyuki)}}><select value={row.maiyuki} onChange={e => handleNightmareChange(i, e, 'maiyuki')} style={{backgroundColor: cellColor(row.maiyuki)}}><option value={1} >〇</option><option value={2} >◎</option><option value={3}>✕</option></select></TableCell>
                                        <TableCell style={{ fontSize: 5, backgroundColor: cellColor(row.gorilla)}}><select value={row.gorilla} onChange={e => handleNightmareChange(i, e, 'gorilla')} style={{backgroundColor: cellColor(row.gorilla)}}><option value='1' >〇</option><option value='2' >◎</option><option value='3'>✕</option></select></TableCell>
                                        <TableCell style={{ fontSize: 5, backgroundColor: cellColor(row.saq)}}><select value={row.saq} onChange={e => handleNightmareChange(i, e, 'saq')} style={{backgroundColor: cellColor(row.saq)}}><option value='1' >〇</option><option value='2' >◎</option><option value='3'>✕</option></select></TableCell>
                                        <TableCell style={{ fontSize: 5, backgroundColor: cellColor(row.ma)}}><select value={row.ma} onChange={e => handleNightmareChange(i, e, 'ma')} style={{backgroundColor: cellColor(row.ma)}}><option value='1' >〇</option><option value='2' >◎</option><option value='3'>✕</option></select></TableCell>
                                        <TableCell style={{ fontSize: 5, backgroundColor: cellColor(row.otto)}}><select value={row.otto} onChange={e => handleNightmareChange(i, e, 'otto')} style={{backgroundColor: cellColor(row.otto)}}><option value='1' >〇</option><option value='2' >◎</option><option value='3'>✕</option></select></TableCell>
                                        <TableCell style={{ fontSize: 5, backgroundColor: cellColor(row.kinoko)}}><select value={row.kinoko} onChange={e => handleNightmareChange(i, e, 'kinoko')} style={{backgroundColor: cellColor(row.kinoko)}}><option value='1' >〇</option><option value='2' >◎</option><option value='3'>✕</option></select></TableCell>
                                        <TableCell style={{ fontSize: 5, backgroundColor: cellColor(row.laurent)}}><select value={row.laurent} onChange={e => handleNightmareChange(i, e, 'laurent')} style={{backgroundColor: cellColor(row.laurent)}}><option value='1' >〇</option><option value='2' >◎</option><option value='3'>✕</option></select></TableCell>
                                        <TableCell style={{ fontSize: 5, backgroundColor: cellColor(row.happylunch)}}><select value={row.happylunch} onChange={e => handleNightmareChange(i, e, 'happylunch')} style={{backgroundColor: cellColor(row.happylunch)}}><option value='1' >〇</option><option value='2' >◎</option><option value='3'>✕</option></select></TableCell>
                                        <TableCell style={{ fontSize: 5, backgroundColor: cellColor(row.eri)}}><select value={row.eri} onChange={e => handleNightmareChange(i, e, 'eri')} style={{backgroundColor: cellColor(row.eri)}}><option value='1' >〇</option><option value='2' >◎</option><option value='3'>✕</option></select></TableCell>
                                        <TableCell style={{ fontSize: 5, backgroundColor: cellColor(row.yoa)}}><select value={row.yoa} onChange={e => handleNightmareChange(i, e, 'yoa')} style={{backgroundColor: cellColor(row.yoa)}}><option value='1' >〇</option><option value='2' >◎</option><option value='3'>✕</option></select></TableCell>
                                        <TableCell style={{ fontSize: 5, backgroundColor: cellColor(row.piyoko)}}><select value={row.piyoko} onChange={e => handleNightmareChange(i, e, 'piyoko')} style={{backgroundColor: cellColor(row.piyoko)}}><option value='1' >〇</option><option value='2' >◎</option><option value='3'>✕</option></select></TableCell>
                                        <TableCell style={{ fontSize: 5, backgroundColor: cellColor(row.raipachi)}}><select value={row.raipachi} onChange={e => handleNightmareChange(i, e, 'raipachi')} style={{backgroundColor: cellColor(row.raipachi)}}><option value='1' >〇</option><option value='2' >◎</option><option value='3'>✕</option></select></TableCell>
                                        <TableCell style={{ fontSize: 5, backgroundColor: cellColor(row.kii)}}><select value={row.kii} onChange={e => handleNightmareChange(i, e, 'kii')} style={{backgroundColor: cellColor(row.kii)}}><option value='1' >〇</option><option value='2' >◎</option><option value='3'>✕</option></select></TableCell>
                                        <TableCell style={{ fontSize: 5, backgroundColor: cellColor(row.chihuahua)}}><select value={row.chihuahua} onChange={e => handleNightmareChange(i, e, 'chihuahua')} style={{backgroundColor: cellColor(row.chihuahua)}}><option value='1' >〇</option><option value='2' >◎</option><option value='3'>✕</option></select></TableCell>
                                        <TableCell style={{ fontSize: 5, backgroundColor: cellColor(row.wabosy)}}><select value={row.wabosy} onChange={e => handleNightmareChange(i, e, 'wabosy')} style={{backgroundColor: cellColor(row.wabosy)}}><option value='1' >〇</option><option value='2' >◎</option><option value='3'>✕</option></select></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            </div>
        </div>
    );
}

// グリッドスタイル
const UseStyles = makeStyles((theme: Theme) => 
    createStyles({
        table: {
            minWidth: 650,
            fontSize: '5pt!important',
        },
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        container: {
            height: 800
        }
    }
));

function cellColor(value: string) {
    let color = '';
    if (value == '1') {
        color = '#add8e6';
    } else if (value == '2') {
        color = '#f08080';
    } else if (value == '3') {
        color = '#c0c0c0';
    }

    return color;
}