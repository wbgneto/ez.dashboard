import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { fade, lighten, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom';

function createData(id, image, realtorName, email, phone, address) {
  return { id, image, realtorName, email, phone, address };
}

const rows = [
  createData('id1', 'image', 'Relator1', 'xxx@gmail.com', '111-222-3333', 'Burnaby'),
  createData('id2', 'image', 'Relator2', 'xxx@gmail.com', '111-222-3333', 'Burnaby'),
  createData('id3', 'image', 'Relator3', 'xxx@gmail.com', '111-222-3333', 'Burnaby'),
  createData('id4', 'image', 'Relator4', 'xxx@gmail.com', '111-222-3333', 'Burnaby'),
  createData('id5', 'image', 'Relator5', 'xxx@gmail.com', '111-222-3333', 'Burnaby'),
  createData('id6', 'image', 'Relator6', 'xxx@gmail.com', '111-222-3333', 'Burnaby'),
  createData('id7', 'image', 'Relator7', 'xxx@gmail.com', '111-222-3333', 'Burnaby'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}



const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));


const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar className={clsx(classes.root)} > 
      {numSelected > 0 ? (
        <>
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Hide">
          <IconButton aria-label="hide">
            <VisibilityOffIcon />
          </IconButton>
        </Tooltip>
      </>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            {/* <FilterListIcon /> */}
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  formControl: {
    margin: theme.spacing(0),
    minWidth: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  searchInput: {
    width : 200,
    [theme.breakpoints.down('md')]: {
      width: '100%',
      paddingRight: 0,
    },
  },

}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.num);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, num) => {
    const selectedIndex = selected.indexOf(num);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, num);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  
  // selecBox
  const [age, setAge] = React.useState('');

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const handleChange = event => {
    setAge(event.target.value);
  };
  //


  return (
    <div className={classes.root} className="container">
      {/* <div className="table_"> */}
      <Typography className="title">Listings</Typography>
      <div className="toolbarWrap">
        {/* SelectBox */}
        <Grid container spacing={2}>
          <Grid item lg={1} md={12} xs={12}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              Option
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              onChange={handleChange}
              labelWidth={labelWidth}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Inactive">Inactive</MenuItem>
            </Select>
          </FormControl>
          </Grid>

          {/* SearchBar */}
          <Grid item lg={9} md={12} xs={12}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <div class="labelFix">
                  <TextField className={classes.searchInput} id="outlined-search" label={"Search"} type="search" variant="outlined" />
                </div>
            </div>
          </Grid>

          {/* Icons */}
          <Grid item lg={1} md={12} xs={12}>
            <EnhancedTableToolbar numSelected={selected.length} />
          </Grid>
          {/* Plus button */}
          <Grid item lg={1} md={12} xs={12}>
            <IconButton aria-label="Add">
              <AddCircleIcon fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </div>
      {/* "toolbarWrap" ends*/}

      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell colSpan={7}>

                        <Grid container component="main" className="realtorGrid">
                          <CssBaseline />
                          <Grid item md={1} >
                            <Checkbox
                              checked={isItemSelected}
                              onClick={event => handleClick(event, row.id)}
                              inputProps={{ 'aria-labelledby': labelId }}
                            />
                          </Grid>
                          <Grid item md={2}>
                            {row.image}
                          </Grid>
                          <Grid item md>
                            <div>{row.realtorName}</div>
                            <div>{row.email}</div>
                            <div>{row.phone}</div>
                            <div>{row.address}</div>
                          </Grid>
                          <Grid item md={2}>
                          <Button variant="outlined" color="primary" className="blockBtn" component={Link} to={"/Listings_Edit"}>
                              Edit
                          </Button>
                          <Button variant="outlined" color="primary" className="blockBtn" component={Link} to={"/Listings_View"}>
                              View
                          </Button>
                          </Grid>
                        </Grid>
                        </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
