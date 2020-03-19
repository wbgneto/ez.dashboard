import Chip from "@material-ui/core/Chip";
import React from "react";

export default function Feature({ type, value }) {
    const labels = ['Bedrooms', 'Washrooms', 'Garages'];

    return <Chip
        label={`${labels[type]}: ${value}`}
        variant="outlined"
    />
}