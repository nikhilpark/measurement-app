import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card"
export default function Converter() {

    const [height, setHeight] = useState(1)
    const [width, setWidth] = useState(1)
    const [scale, setScale] = useState(50)
    // const [answer,setAnwer] = useState(null)

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Card style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem', fontSize: '1.4rem', fontFamily: 'Arial' }}>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <TextField
                            value={height}
                            onChange={(e) => { setHeight(e.target.value) }}

                            label={"Enter height (m)"}
                        />
                        x
                        <TextField
                            onChange={(e) => { setWidth(e.target.value) }}
                            value={width}

                            label={"Enter width (m)"}
                        />
                    </div>
                    <div>
                        <TextField
                            onChange={(e) => { setScale(e.target.value) }}
                            value={scale}

                            label={"Enter 1/ scale"}
                        />
                    </div>
                    <Card style={{ marginTop: '1rem',padding:'1rem',fontWeight:'500' }}>
                        <div>Measurement in cm </div>
                        <div>Measurement in cm </div>
                        {((height*1000)/scale)/10}  x {((width*1000)/scale)/10} 
                    </Card>

                </Card>

            </div>


        </div>
    )
}