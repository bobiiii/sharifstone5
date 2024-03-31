// import  { useState, useContext } from "react";
// import "./ViewCollection.css";
// import axios from "axios";
// import APIContext from "../../Store/apiContext";
// import { getCollection, getVisualizer } from "../../apiCall/apiCall";

// const ViewCollection = () => {
//   const { apiStore, setAPIStore } = useContext(APIContext);
//   const [faq, setFaq] = useState(-1);
//   const [edit, setEdit] = useState("");
//   const [editFields, setEditFields] = useState("");
//   const collectionKeys = apiStore?.collections && Object.keys(apiStore?.collections);

//   const apiCalls = async () => {
//     const collections = await getCollection();
//     const visualizers = await getVisualizer();
//     const newObj = {
//       ...apiStore,
//       collections,
//       visualizers,
//     };
//     setAPIStore(newObj);
//   }
  
//   const updateCollection = async (id) => {
//     console.log(id, editFields);
//     await axios.put(`https://sharifstone-server.vercel.app/api/collection/${id}`,editFields)
//     .then((response) => {
//       alert('Collection Updated')
//       setEditFields("")
//       setEdit("")
//       apiCalls()
//     })
//   };

//   const deleteCollection = async (id) => {
//     console.log(id, editFields);
//     await axios.delete(`https://sharifstone-server.vercel.app/api/collection/${id}`)
//     .then((response) => {
//       alert('Collection Removed')
//       apiCalls()
//     })
//   };
//   return (
//     <div className="login-container">
//       <div className="collection-container">
//         {collectionKeys?.map((v, i) => {
//           const data = apiStore.collections[v];
//           console.log("DATA ", data);
//           return (
//             <div
//               className={"faq-questioncontaier"}
//               onClick={() => i !== faq && setFaq(i)}
//             >
//               <div className="collection-header">
//                 {v}
//                 <div>
//                   {/* {faq === i ? <FiMinus size={25} /> : <FiPlus size={25} />} */}
//                 </div>
//               </div>
//               {faq === i && (
//                 <div className="collection-table">
//                   <div className="collection-fields">
//                     <div className="collection-row">
//                       <div className="rowcell">Color Name</div>
//                       <div className="rowcell">Collection Name</div>
//                       <div className="rowcell">Color URL</div>
//                       <div className="rowcell">Collection URL</div>
//                       <div className="rowcell">Color Image</div>
//                       <div className="rowcell">Display Image</div>
//                       <div className="rowcell">Description</div>
//                       <div className="rowcell">Grip</div>
//                       <div className="rowcell">Matte</div>
//                       <div className="rowcell">Thicknesses</div>
//                       <div className="rowcell">Edit</div>
//                       <div className="rowcell">Delete</div>
//                     </div>
//                     {data.map((v, i) => (
//                       <div className="collection-row">
//                         <div className="rowcell-2">
//                           {edit === v?.id ? (
//                             <input
//                               type="text"
//                               value={editFields?.color_name}
//                               onChange={(e) =>
//                                 setEditFields({
//                                   ...editFields,
//                                   color_name: e.target.value,
//                                 })
//                               }
//                               placeholder={v?.color_name}
//                             />
//                           ) : (
//                             v?.color_name
//                           )}
//                         </div>
//                         <div className="rowcell-2">
//                           {edit === v?.id ? (
//                             <input
//                               type="text"
//                               value={editFields?.collection_name}
//                               onChange={(e) =>
//                                 setEditFields({
//                                   ...editFields,
//                                   collection_name: e.target.value,
//                                 })
//                               }
//                               placeholder={v?.collection_name}
//                             />
//                           ) : (
//                             v?.collection_name
//                           )}
//                         </div>
//                         <div className="rowcell-2">
//                           {edit === v?.id ? (
//                             <input type="text" 
//                             value={editFields?.color_url} onChange={(e) => setEditFields({...editFields, color_url: e.target.value})} 
//                             placeholder={v?.color_url} />
//                           ) : (
//                             v?.color_url
//                           )}
//                         </div>
//                         <div className="rowcell-2">
//                           {edit === v?.id ? (
//                             <input
//                               type="text"
//                               value={editFields?.collection_url} onChange={(e) => setEditFields({...editFields, collection_url: e.target.value})}
//                               placeholder={v?.collection_url}
//                             />
//                           ) : (
//                             v?.collection_url
//                           )}
//                         </div>
//                         <div className="rowcell-2">
//                           {edit === v?.id ? (
//                             <input 
//                               type="text" 
//                               value={editFields?.color_image} onChange={(e) => setEditFields({...editFields, color_image: e.target.value})}
//                               placeholder={v?.color_image} />
//                           ) : (
//                             <a href={v.color_image} target="_blank">
//                               Color Image
//                             </a>
//                           )}
//                         </div>
//                         <div className="rowcell-2">
//                           {edit === v?.id ? (
//                             <input 
//                               type="text" 
//                               value={editFields?.display_image} onChange={(e) => setEditFields({...editFields, display_image: e.target.value})}
//                               placeholder={v?.display_image} />
//                           ) : (
//                             <a href={v.display_image} target="_blank">
//                               Display Image
//                             </a>
//                           )}
//                         </div>
//                         <div className="rowcell-2">
//                           {edit === v?.id ? (
//                             <input
//                               type="text"
//                               value={editFields?.description} onChange={(e) => setEditFields({...editFields, description: e.target.value})}
//                               placeholder={v?.description}
//                             />
//                           ) : (
//                             v?.description
//                           )}
//                         </div>
//                         <div className="rowcell-2">
//                           {edit === v?.id ? (
//                             <input
//                               type="text"
//                               value={editFields?.grip} onChange={(e) => setEditFields({...editFields, grip: e.target.value})}
//                               placeholder={v?.grip}
//                             />
//                           ) : (
//                             v?.grip
//                           )}
//                         </div>
//                         <div className="rowcell-2">
//                           {edit === v?.id ? (
//                             <input
//                               type="text"
//                               value={editFields?.matte} onChange={(e) => setEditFields({...editFields, matte: e.target.value})}
//                               placeholder={v?.matte}
//                             />
//                           ) : (
//                             v?.matte
//                           )}
//                         </div>
//                         <div className="rowcell-2">
//                           {edit === v?.id ? (
//                             <input
//                               type="text"
//                               value={editFields?.thicknesses} onChange={(e) => setEditFields({...editFields, thicknesses: e.target.value})}
//                               placeholder={v?.thicknesses}
//                             />
//                           ) : (
//                             v?.thicknesses
//                           )}
//                         </div>
//                         <div className="rowcell-2">
//                           {edit === v?.id ? (
//                             <button onClick={() => updateCollection(v.id)}>
//                               Update
//                             </button>
//                           ) : (
//                             <button onClick={() => {setEdit(v.id); setEditFields(v)}}>Edit</button>
//                           )}
//                         </div>
//                         <div onClick={() => deleteCollection(v.id)} className="rowcell-2">
//                           <button>Delete</button>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ViewCollection;
