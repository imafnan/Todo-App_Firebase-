import  './TodoOne.css'
import { PiNotePencilBold } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";



const TodoOne = () => {
  return (
    <>
      <div className="containe">  


      {/*~~~~~~~~~~~~ TITLE START ~~~~~~~~~~~~ */}
        <div className="mainTitle mt-10">
          <div className="titleName grid grid-cols-[1fr_max-content_1fr] grid-rows-[27px_0] gap-[20px] items-center text-center">
            <span className="block w-[50px] h-[1px] bg-[#f8f8f8] border-b-[2px] ml-auto"></span>
            <h1 className="text-[30px] font-light text-[#fff] uppercase tracking-[1px] font-FontOne">TO-DO NOW</h1>
            <span className="block w-[50px] h-[1px] bg-[#f8f8f8] border-b-[2px]"></span>
          </div>
        </div>
      {/*~~~~~~~~~~~~~ TITLE END ~~~~~~~~~~~~~ */}



      {/*----------- Divider Start ------------*/}
        <div className='Divider flex justify-center'>
        <div className=" flex grid-cols-[1fr_max-content_1fr] grid-rows-[27px_0] gap-[11px] items-center text-center">
            <span className="block w-[150px] h-[1px] bg-[#f8f8f8] border-b-[2px] ml-auto"></span>
            <h1 className="text-[30px] font-light text-[#fff] uppercase tracking-[1px] font-FontOne"></h1>
            <h1 className="text-[30px]  text-[#fff] mx-5"><PiNotePencilBold/></h1>
            <span className="block w-[150px] h-[1px] bg-[#f8f8f8] border-b-[2px]"></span>
          </div>
        </div>
      {/* /-------------- Divider End -----------/ */}



      {/* /========== Input Part Start ==========/ */}
        <div className=" h-[50px] mt-[70px] border-[2px] w-[700px] justify-between rounded-[20px] border-none bg-[#D9D9D9] flex m-auto">
            <input type="text" placeholder='Enter Your Task' className='border-transparent text-gray-600 pl-5 w-full outline-none bg-transparent'/>
            <button className='h-full w-[130px] rounded-[20px] bg-[#4F4F4F] text-white text-[25px] font-FontOne'>Add task</button>
        </div>
      {/*========== Input Part Start ==========*/}



      {/* --------- Line Start ---------*/}
        <div className=" w-[996px] mt-[34px] mx-auto  h-[2px]
           bg-[#f8f8f8] border-b-[2px]">
        </div>
      {/* --------- Line End ---------*/}


      
      {/********** List Start ***********/}
          <div className=" h-[50px] mt-[70px] border-[2px] w-[700px] justify-between rounded-[10px] border-none bg-[#222222] flex m-auto gap-2">
              <input type="text" placeholder='Enter Your Task' className='border-transparent text-white pl-5 w-full outline-none bg-transparent'/>
              <button ><RiDeleteBin6Line className='h-full w-[50px] p-2 rounded-[10px] bg-[#999999] text-black text-[15px] font-FontOne'/></button>
              <button ><CiEdit className='h-full w-[50px] p-2 rounded-[10px] bg-[#999999] text-black text-[15px] font-FontOne'/></button>
          </div>
      {/*********** List End ************/}
    </div>

  </>
  )
}

export default TodoOne
