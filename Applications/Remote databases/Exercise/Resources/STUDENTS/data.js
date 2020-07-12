const appKey = `BD8D30E6-598F-D08F-FF83-014AADA39E00`;
const restApiKey = `59CFC15F-8417-4506-BA1A-65A215C86C2F`;

const baseUrl = `https://api.backendless.com/${appKey}/${restApiKey}/data/Students`;

export async function getStudents() {

    const response = await fetch(baseUrl);

    const students = await response.json();

    return students;
}

