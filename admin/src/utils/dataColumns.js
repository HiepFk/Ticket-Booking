export const movieColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "poster",
    headerName: "Poster",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.poster} alt="avatar" />
          {params.row.name}
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    width: 230,
  },

  {
    field: "time",
    headerName: "Time",
    width: 100,
  },
];
