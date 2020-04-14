import React from 'react';


export default function ItemSearch() {
  return (
    <div>
      <div class="input-group col-xl-8 input_search">
        <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="جستجو در همه ی آگهی ها"></input>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">همه آگهی ها</button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div role="separator" class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </div>
      </div>
    </div>
  )
}
