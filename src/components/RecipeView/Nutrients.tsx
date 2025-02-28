
const tableData: { [key: string]: string[] } = {
    "Carbohydartes": ["CHOCDF", "CHOCDF.net", "FIBTG", "SUGAR"],
    "Protein": ["PROCNT"],
    "FAT": ["FAT", "FASAT", "FATRN", "FAMS", "FAPU", "CHOLE"],
    "Minerals": ["NA", "CA", "MG", "k", "FE", "ZN", "P"],
    "Vitamins": ["VITA_RAE", "VITC", "THIA", "RIBF", "NIA"]
}

const Nutrients = ({nutrients}:{nutrients:any}) => {
  return (
    <div className="p-5 rounded-xl border bg-white">
        
        <h1 className="my-4 font-semibold text-violet-600 text-xl border-b">Nutrients:</h1>

        {
            Object.keys(tableData).map((data,index)=>(
                <table key={index} className="table-auto border-collapse my-4 min-w-[200px]">
                    <caption className="caption-top text-left pb-1 font-semibold underline">
                        Table {index+1}: {data}
                    </caption>
                    <thead>
                        <tr>
                        {
                            tableData[data].map((item, index)=>(
                                nutrients[item] && <th key={index} className="p-2 text-center font-semibold text-violet-600 border">{nutrients[item].label}</th>
                            ))
                        }
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {
                            tableData[data].map((item, index)=>(
                                nutrients[item] && <td key={index} className="p-2 text-center border-x border-b">{Math.round(nutrients[item].quantity)}{nutrients[item].unit}</td>
                            ))
                        }    
                        </tr>
                    </tbody>    
                </table>
            ))
        }
    </div>
  )
}

export default Nutrients