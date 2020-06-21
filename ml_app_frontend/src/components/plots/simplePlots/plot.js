import React from 'react'
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
function Chart(props) {
    const Plot = createPlotlyComponent(Plotly);
    let wid = window.innerWidth <= 600 ? 0.85 * window.innerWidth : 0.70 * window.innerWidth
    let hei = wid <= 400 ? wid : 400
    return (
        <section id='plotlyChartContainer'>
            <Plot
                data={[
                    {
                        x: props.xCord,
                        y: props.yCord,
                        type: props.type,
                        mode: props.mode,
                        marker: { color: props.markerColor },
                    },
                ]}
                layout={{
                    width: wid, height: hei,
                    title: props.title, xaxis: {
                        ticks: 'outside',
                        tick0: 0,
                        dtick: 1,
                        tickcolor: '#000'
                    },
                    yaxis: {
                        autotick: true,
                        ticks: 'outside',
                        tick0: 0,
                        dtick: 1,
                        tickcolor: '#000'
                    },
                }
                }

            />
        </section>
    )
}
export default Chart