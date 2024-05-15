export const getAllCompany = async (page, limit) => {
    let url = `https://api.spacexdata.com/v4/company?page=${page}&limit=${limit}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    return data;
}
