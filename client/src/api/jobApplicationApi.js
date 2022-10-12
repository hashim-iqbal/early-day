import baseApi from "./baseApi";

export const fetchJobApplication = (page, filter, setJobApplication) =>
    baseApi
        .get("/job_applications", {
            params: {
                page,
                filter: filter === 'all' ? undefined : filter
            }
        })
        .then((res) => {
            setJobApplication(res.data);
        })
        .catch((err) => {
            setJobApplication([]);
            console.log(err);
        });

export const deleteJobApplication = (id) =>
    baseApi
        .delete(`/job_applications/${id}`).then((res) => res)
        .catch((err) => Promise.reject(err))
