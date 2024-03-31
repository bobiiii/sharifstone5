// import { useState, useContext } from "react";
// import "./viewVisualizer.css";
// import axios from "axios";
// import APIContext from "../../Store/apiContext";
// import { getCollection, getVisualizer } from "../../apiCall/apiCall";

// const ViewVisualizer = () => {
//   const { apiStore, setAPIStore } = useContext(APIContext);
//   const [faq, setFaq] = useState(-1);
//   const [edit, setEdit] = useState("");
//   const [editFields, setEditFields] = useState("");
//   const collectionKeys =
//     apiStore?.visualizers && Object.keys(apiStore?.visualizers);

//   const apiCalls = async () => {
//     const collections = await getCollection();
//     const visualizers = await getVisualizer();
//     const newObj = {
//       ...apiStore,
//       collections,
//       visualizers,
//     };
//     setAPIStore(newObj);
//   };

//   const updateCollection = async (id) => {
//     console.log(id, editFields);
//     await axios
//       .put(
//         `https://sharifstone-server.vercel.app/api/visualizer/${id}`,
//         editFields
//       )
//       .then((response) => {
//         alert("Collection Updated");
//         setEditFields("");
//         setEdit("");
//         apiCalls();
//       });
//   };

//   const deleteCollection = async (id) => {
//     console.log(id, editFields);
//     await axios
//       .delete(`https://sharifstone-server.vercel.app/api/visualizer/${id}`)
//       .then((response) => {
//         alert("Collection Removed");
//         apiCalls();
//       });
//   };
  
//   return (
//     <div className="login-container">
//       <div className="collection-container">
//         {collectionKeys?.map((v, i) => {
//           const data = apiStore.visualizers[v];
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
//                       <div className="rowcell">Color Image</div>
//                       <div className="rowcell">Room</div>
//                       <div className="rowcell">Ambient</div>
//                       <div className="rowcell">Ambient URL</div>
//                       <div className="rowcell">Ambient Image</div>
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
//                               value={editFields?.color_image}
//                               onChange={(e) =>
//                                 setEditFields({
//                                   ...editFields,
//                                   color_image: e.target.value,
//                                 })
//                               }
//                               placeholder={v?.color_image}
//                             />
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
//                               value={editFields?.room}
//                               onChange={(e) =>
//                                 setEditFields({
//                                   ...editFields,
//                                   room: e.target.value,
//                                 })
//                               }
//                               placeholder={v?.room}
//                             />
//                           ) : (
//                             v?.room
//                           )}
//                         </div>
//                         <div className="rowcell-2">
//                           {edit === v?.id ? (
//                             <input
//                               type="text"
//                               value={editFields?.ambient}
//                               onChange={(e) =>
//                                 setEditFields({
//                                   ...editFields,
//                                   ambient: e.target.value,
//                                 })
//                               }
//                               placeholder={v?.ambient}
//                             />
//                           ) : (
//                             v?.ambient
//                           )}
//                         </div>
//                         <div className="rowcell-2">
//                           {edit === v?.id ? (
//                             <input
//                               type="text"
//                               value={editFields?.ambient_url}
//                               onChange={(e) =>
//                                 setEditFields({
//                                   ...editFields,
//                                   ambient_url: e.target.value,
//                                 })
//                               }
//                               placeholder={v?.ambient_url}
//                             />
//                           ) : (
//                             v?.ambient_url
//                           )}
//                         </div>
//                         <div className="rowcell-2">
//                           {edit === v?.id ? (
//                             <input
//                               type="text"
//                               value={editFields?.ambient_image_url}
//                               onChange={(e) =>
//                                 setEditFields({
//                                   ...editFields,
//                                   ambient_image_url: e.target.value,
//                                 })
//                               }
//                               placeholder={v?.ambient_image_url}
//                             />
//                           ) : (
//                             <a href={v.ambient_image_url} target="_blank">
//                               Ambient Image URL
//                             </a>
//                           )}
//                         </div>
//                         <div className="rowcell-2">
//                           {edit === v?.id ? (
//                             <button onClick={() => updateCollection(v.id)}>
//                               Update
//                             </button>
//                           ) : (
//                             <button
//                               onClick={() => {
//                                 setEdit(v.id);
//                                 setEditFields(v);
//                               }}
//                             >
//                               Edit
//                             </button>
//                           )}
//                         </div>
//                         <div
//                           onClick={() => deleteCollection(v.id)}
//                           className="rowcell-2"
//                         >
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

// export default ViewVisualizer;
