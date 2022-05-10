import React from 'react'
import html2canvas from 'html2canvas'
import { jsPDF } from "jspdf";

class Exporter extends React.Component {
    constructor(props) {
        super(props)
    }

    export = (type, name) => {

        html2canvas(document.querySelector(`#capture`)).then(canvas => {
            let dataURL = canvas.toDataURL('image/png');

            if (type === 'pdf') {
                const pdf = new jsPDF({
                    orientation: "landscape",
                    unit: "in",
                    format: [14, 10]
                });

                pdf.addImage(dataURL, 'PNG', .6, .6);
                pdf.save(`${name}.pdf`);

            } else if (type === 'png') {
                var link = document.createElement('a');
                link.download = `${name}.png`;
                link.href = dataURL;
                link.click();
            }
        });
    }
    render() {
        return (
            <div>
                <button onClick={() => this.export("pdf", "my-content")}><i className="fa fa-download"></i> Télécharger mon CV</button>
            </div>
        )
    }
}

export default Exporter
