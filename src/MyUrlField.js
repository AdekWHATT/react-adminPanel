import React from "react";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    link: {
        textDecoration: 'none'
    },

})

const MyUrlField = ({ record = {}, source }) => {
    const classes = useStyles()
    return (
        <a href={record[source]} className={classes.link}>
            {record[source]}
        </a>
    )
}
export default MyUrlField;

