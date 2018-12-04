# color-palette

## TODO ::
> - [ ] Whiteboard - data modeling (front > back)
> - [ ] Whiteboard - routes
> - [ ] Create server
> - [ ] Create db
> - [ ] Connect and test server + db
> - [ ] Create data schema
> - [ ] Write error handlers + tests for data schema
> - [ ] Add color data (100+)
> - [ ] Check collections + document model
> - [ ] Paginate server-side to return 12 color documents per request.
> - [ ] Test return
> - [ ] Set up react app (decide either parcel || webpack)
> - [ ] Whiteboard frontend components
> - [ ] Whiteboard frontend router/routes
> - [ ] Display initial landing data

## SASS Variables
> - $header-gray: #363A3B
> - $nav-background: #D6D8D7
> - $nav-font: #565857
> - $main-background: #FDFFFF
> - TODO: link href="https://fonts.googleapis.com/css?family=Source+Serif+Pro" rel="stylesheet"
> - $main-font: 'Source Serif Pro', serif;


## Initial data modeling
```
{
    "colors": {
        {
            _id: OjectId(),
            primaryColor: "red",
            hex: "#value"
        },
        {
            _id: OjectId(),
            primaryColor: "green",
            hex: "#value"
        },
    }
}
```

## Possible add on data
```
{
    {
        _id: OjectId(),
        primaryColor: "red",
        hex: "#value",
        shadeToTint: ["shade", "shade", "tint", "tint"]
    }
} 
```