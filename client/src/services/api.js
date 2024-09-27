import axios from 'axios'

const API_URL = "http://localhost:8000"

// Adding car

export const addCar = async (carData) => {
    try {
        const res = await axios.post(`${API_URL}/admin/car`,{carData})
        return res.data
    } catch (e) {
        console.log("Error adding car data" , e);
        throw e;
    }
}

// Adding driver
export const addDriver = async (driverData) => {
    try {
        const res = await axios.post(`${API_URL}/admin/driver`,{driverData})
        return res.data;
    } catch (error) {
        console.log("Error adding driver data: ", error);
        throw error
    }
}

// add Hire
export const addHire = async (hireData) => {
    try {
        const res = await axios.post(`${API_URL}/`,{hireData})
        return res.data
    } catch (e) {
        console.log("Error adding car data" , e);
        throw e;
    }
}

// getting car
export const getCar = async () => {
    try{
        const response = await axios.get(`${API_URL}/admin/car`);
        return response.data;
    }catch(e){
        console.error("Error fetching the transactions:" , error);
        throw e;
    }
}

// getting driver
export const getDriver = async () => {
    try {
        const response = await axios.get(`${API_URL}/admin/driver`);
        return response.data;
    } catch (error) {
        console.log("Error fetching driver data: ", error);
        throw error;
        
    }
}

// deleting car
export const deleteCar = async (carId) => {
    try{
        const response = await axios.delete(`${API_URL}/admin/car/${carId}`);
        return response.data;
    }catch(e){
        console.error("Error deleting the car:" , error);
        throw e;
    }
}

// deleting driver
export const deleteDriver = async (driverId) => {
    try{
        const response = await axios.delete(`${API_URL}/admin/driver/${driverId}`);
        return response.data;
    }catch(e){
        console.error("Error deleting the Driver:" , error);
        throw e;
    }
}
