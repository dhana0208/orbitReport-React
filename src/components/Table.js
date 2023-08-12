import "./styling.css";
const Table = ({ sat }) => {
  return (
      <table>
       <thead>
        <tr>
        
          <th>Name</th>
          <th>Type of Satelite</th>
          <th>Launch Date</th>
          <th>Status</th>

        </tr>
        </thead>
        <tbody>
        
          {
            sat.map((st)=>{
     
              return <tr key={st.id}>
                 <td>{st.name}</td>
                 <td>{st.type}</td>
                 <td>{st.launchDate}</td>
                 <td>{st.operational?"Active":"In Active"}</td>
              
              </tr>
            })


          }
         
        </tbody>
      </table>
  );
};

export default Table;