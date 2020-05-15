<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
         
          <div class="sb-sidenav-menu-heading">
             <!-- <h4>{{$store.state.profile.name}}</h4> -->
          Core</div>
         
            <div class="sb-nav-link-icon">
               <router-link to="/home" class="nav-link" exact>
              <i class="fas fa-tachometer-alt"></i> Dashboard
              </router-link>
            </div>

            <div class="sb-nav-link-icon">
               <router-link to="/home/catagory" class="nav-link" exact>
              <i class="fas fa-book-open"></i>Katagory
              </router-link>
            </div>
          
          
          <div class="sb-sidenav-menu-heading">Interface</div>
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseLayouts"
            aria-expanded="false"
            aria-controls="collapseLayouts"
          >
            <div class="sb-nav-link-icon">
              <i class="fas fa-columns"></i>
             </div>Master Data
              <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            class="collapse"
            id="collapseLayouts"
            aria-labelledby="headingOne"
            data-parent="#sidenavAccordion"
          >
            <nav class="sb-sidenav-menu-nested nav">
               <router-link to="/home/catagory" class="nav-link" exact>
                Produk
               </router-link>
               <router-link to="/home/catagory" class="nav-link" exact>
                Harga
               </router-link>
              
            </nav>
          </div>
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <div class="sb-nav-link-icon">
              <i class="fas fa-book-open"></i>
            </div>Transaksi
            <div class="sb-sidenav-collapse-arrow">
              <i class="fas fa-angle-down"></i>
            </div>
          </a>
          <div
            class="collapse"
            id="collapsePages"
            aria-labelledby="headingTwo"
            data-parent="#sidenavAccordion"
          >
            <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
              <a
                class="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#pagesCollapseAuth"
                aria-expanded="false"
                aria-controls="pagesCollapseAuth"
              >
                Inventory
                <div class="sb-sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                class="collapse"
                id="pagesCollapseAuth"
                aria-labelledby="headingOne"
                data-parent="#sidenavAccordionPages"
              >
                <nav class="sb-sidenav-menu-nested nav">
                  <a class="nav-link" href="login.html">Penerimaan</a>
                  <a class="nav-link" href="register.html">Kartu Stok</a>
                  <a class="nav-link" href="password.html">Ajusment</a>
                </nav>
              </div>
              <a
                class="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#pagesCollapseError"
                aria-expanded="false"
                aria-controls="pagesCollapseError"
              >
                Order Produk
                <div class="sb-sidenav-collapse-arrow">
                  <i class="fas fa-angle-down"></i>
                </div>
              </a>
              <div
                class="collapse"
                id="pagesCollapseError"
                aria-labelledby="headingOne"
                data-parent="#sidenavAccordionPages"
              >
                <nav class="sb-sidenav-menu-nested nav">
                  <a class="nav-link" href="401.html">POS</a>
                  <a class="nav-link" href="404.html">Oder Online</a>
                  <a class="nav-link" href="500.html">Order Manual</a>
                </nav>
              </div>
            </nav>
          </div>
          <div class="sb-sidenav-menu-heading">Addons</div>
          <a class="nav-link" href="charts.html">
            <div class="sb-nav-link-icon">
              <i class="fas fa-chart-area"></i>
            </div>Karyawan
          </a>
          <a class="nav-link" href="tables.html">
            <div class="sb-nav-link-icon">
              <i class="fas fa-table"></i>
            </div>Saldo
          </a>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>Start Bootstrap
      </div>
    </nav>
  </div>
</template>