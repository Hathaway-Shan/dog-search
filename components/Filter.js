

export default function createFilter(form, { handleFilter }) {
    const input = form.querySelector('input');
    const select = form.querySelector('select');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        // *** call handleFilter with an object that has the breed and age;
        // because breed is being called as part of the filter object it needs to be packaged as an object
        handleFilter({ breed: formData.get('breed') }, formData.get('age'));
    });

    return ({ breed, age }) => {
        // *** set the values of the select and input
        input.value = age || '';
        select.value = breed || '';
    };
}