class Table {
  constructor({columns, data, styles}) {
    this.columns = columns;
    this.data = data;
    this.styles = styles;
  }
};

const renderTable = ({columns, data, styles}) => {
  const parentElement = document.getElementById("wrapper");
  const tableWrapper = document.createElement("table");
  tableWrapper.style.borderCollapse = 'collapse';
  
  // Table Head Row Generation
  const tableHeadRow = document.createElement("tr");
  columns.forEach(column => {
    const tableHead = document.createElement("th");
    tableHead.style.border = styles.border;
    tableHead.style.backgroundColor = styles.tableHeadBgColor;
    tableHead.style.padding = styles.cellPadding;
    tableHead.innerHTML = column;
    tableHeadRow.append(tableHead);
  });
  tableWrapper.append(tableHeadRow);

  // Table Row Data Generation
  data.forEach(item => {
    const tableRow = document.createElement("tr");
    const itemValues = Object.values(item);
    itemValues.forEach(item => {
      const tableData = document.createElement("td");
      tableData.style.border = styles.border;
      tableData.style.padding = styles.cellPadding;
      tableData.innerHTML = item;
      tableRow.append(tableData);
    });
    tableWrapper.append(tableRow);
  });

  // Append Generated Table into Parent Element
  parentElement.append(tableWrapper);
};

const table1 = new Table({
  columns: ['Name', 'Email', 'Phone Number'],
  data: [
    { name: 'Pedro', email: 'pedro@email.com', phoneNumber: '123' },
    { name: 'Enrique', email: 'enrique@email.com', phoneNumber: '231' },
    { name: 'Machado', email: 'machado@email.com', phoneNumber: '312' },
    { name: 'Alejandro', email: 'alejandro@email.com', phoneNumber: '000' },
  ],
  styles: {
    cellPadding: '5px 10px',
    tableHeadBgColor: 'magenta',
    border: '1px solid black'
  }
});

renderTable(table1);