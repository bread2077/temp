export default class ListOpener {
  constructor(blockSelector, listSelector) {
    this._block = document.querySelector(blockSelector);
    this._list = this._block.querySelectorAll(listSelector);
  }

  _closeListItem(link, submenu) {
    link.classList.remove("link_type_menu_opened");
    submenu.classList.remove("links-sublist_opened");
  }

  _openListItem(link, submenu) {
    link.classList.add("link_type_menu_opened");
    submenu.classList.add("links-sublist_opened");
  }

  initializeOpener() {
    this._list.forEach((link) => {
      const submenu = link.nextElementSibling;

      submenu &&
        link.addEventListener("click", (e) => {
          e.preventDefault();
          const openedMenuLink = this._block.querySelector(
            ".link_type_menu_opened"
          );

          if (link.classList.contains("link_type_menu_opened")) {
            this._closeListItem(link, submenu);
          } else {
            openedMenuLink &&
              this._closeListItem(
                openedMenuLink,
                openedMenuLink.nextElementSibling
              );
            this._openListItem(link, submenu);
          }
        });
    });
  }
}
