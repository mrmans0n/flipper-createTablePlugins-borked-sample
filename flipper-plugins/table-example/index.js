import {ManagedDataInspector, Panel, Text, createTablePlugin} from 'flipper';

type Id = string;

type Row = {
  id: Id,
  column1: string,
  column2: string,
  column3: string,
  extras: Object,
};

function buildRow(row: Row) {
  return {
    columns: {
      column1: {
        value: <Text>{row.column1}</Text>,
        filterValue: row.column1,
      },
      column2: {
        value: <Text>{row.column2}</Text>,
        filterValue: row.column2,
      },
      column3: {
        value: <Text>{row.column3}</Text>,
        filterValue: row.column3,
      },
    },
    key: row.id,
    copyText: JSON.stringify(row),
    filterValue: `${row.column1} ${row.column2} ${row.column3}`,
  };
}

function renderSidebar(row: Row) {
  return (
    <Panel floating={false} heading={'Extras'}>
      <ManagedDataInspector data={JSON.parse(row.extras)} expandRoot={true} />
    </Panel>
  );
}

const columns = {
  time: {
    value: 'Column1',
  },
  module: {
    value: 'Column2',
  },
  name: {
    value: 'Column3',
  },
};

const columnSizes = {
  time: '15%',
  module: '20%',
  name: 'flex',
};

export default createTablePlugin({
  title: 'Table Example', // Title of plugin
  id: 'tableexample', // ID of plugin
  method: 'newRow', // Method which should be subscribed to to get new rows with share Row (from above),
  icon: 'washing-machine',
  columns,
  columnSizes,
  renderSidebar,
  buildRow,
});