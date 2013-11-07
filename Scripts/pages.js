//indexPage components
var indexLeftSideBarBloc1 = new components.bloc(1, true, enums.blocTypeEnum.List, enums.traductionCodeEnum.Information,[
    new components.blocItem(1,true,enums.blocItemTypeEnum.Text,enums.blocItemEnum.Introduction, [types.languages.Chinese,types.languages.English]),
    new components.blocItem(2,true,enums.blocItemTypeEnum.Image,enums.blocItemEnum.Culture,[types.languages.Chinese, types.languages.English], {'src':'./Images/China-Flag-24.png'}),
    new components.blocItem(3,true,enums.blocItemTypeEnum.Link,enums.blocItemEnum.Destiny,[types.languages.Chinese, types.languages.English]),
    new components.blocItem(4,true,enums.blocItemTypeEnum.ImageLink,enums.blocItemEnum.Exploration,[types.languages.Chinese, types.languages.English],{'href': 'www.lemonde.fr', 'src':'./Images/China-Flag-24.png'})
] ,[types.languages.Chinese,types.languages.English]);
var indexLeftSideBarBloc2 = new components.bloc(2, true, enums.blocTypeEnum.Standalone,enums.traductionCodeEnum.Introduction,
    new components.blocItem(5,true,enums.blocItemTypeEnum.Image,enums.blocItemEnum.Introduction, [],{'class':'flag1', 'src':'./Images/China-Flag-24.png'})
);

var indexLeftSideBarBloc3 = new components.bloc(1, true, enums.blocTypeEnum.List, enums.traductionCodeEnum.Information,[
    new components.blocItem(6,true,enums.blocItemTypeEnum.Text,enums.blocItemEnum.Introduction, [types.languages.Chinese]),
    new components.blocItem(7,true,enums.blocItemTypeEnum.Image,enums.blocItemEnum.Culture,[types.languages.Chinese, types.languages.English], {'src':'./Images/China-Flag-24.png'}),
    new components.blocItem(8,true,enums.blocItemTypeEnum.Link,enums.blocItemEnum.Destiny,[types.languages.Chinese, types.languages.English]),
    new components.blocItem(9,true,enums.blocItemTypeEnum.ImageLink,enums.blocItemEnum.Exploration,[types.languages.Chinese, types.languages.English], {'href': 'www.lemonde.fr', 'src':'./Images/China-Flag-24.png'})
], [types.languages.Chinese] );
var indexLeftSideBar = new components.sideBar(1, true,[indexLeftSideBarBloc1,indexLeftSideBarBloc2,indexLeftSideBarBloc3], [indexLeftSideBarBloc1]);

var indexSections = new components.sections([
    new components.section(1,true,enums.traductionCodeEnum.Introduction,enums.traductionCodeEnum.EntrepriseIntro),
    new components.section(2,false,enums.traductionCodeEnum.Culture,enums.traductionCodeEnum.EntrepriseCult),
    new components.section(3,false,enums.traductionCodeEnum.Destiny,enums.traductionCodeEnum.EntrepriseDestiny),
    new components.section(4,false,enums.traductionCodeEnum.Exploration,enums.traductionCodeEnum.EntrepriseExplo)
]);
var indexPage = pages.PageModule.init({id:enums.PagesEnum.Index,on:true,leftSideBar:indexLeftSideBar,rightSideBar:indexLeftSideBar,title:'INDEX',sections:indexSections});

//aboutPage components
var aboutLeftSideBarBloc1 =new components.bloc(1, true, enums.blocTypeEnum.List, enums.traductionCodeEnum.Information,[
    new components.blocItem(1,true,enums.blocItemTypeEnum.Text,enums.blocItemEnum.Introduction[types.languages.Chinese, types.languages.English]),
    new components.blocItem(2,true,enums.blocItemTypeEnum.Image,enums.blocItemEnum.Culture, [types.languages.Chinese, types.languages.English],{'src':'./Images/China-Flag-24.png'}),
    new components.blocItem(3,true,enums.blocItemTypeEnum.Link,enums.blocItemEnum.Destiny, [types.languages.Chinese, types.languages.English]),
    new components.blocItem(4,true,enums.blocItemTypeEnum.ImageLink,enums.blocItemEnum.Exploration,[types.languages.Chinese, types.languages.English], {'href': 'www.lemonde.fr', 'src':'./Images/China-Flag-24.png'})
] );
var aboutLeftSideBar = new components.sideBar(1, true,[aboutLeftSideBarBloc1]);

var aboutSections = new components.sections([
    new components.section(1,true,enums.traductionCodeEnum.Introduction,enums.traductionCodeEnum.EntrepriseIntro),
    new components.section(2,true,enums.traductionCodeEnum.Culture,enums.traductionCodeEnum.EntrepriseCult),
    new components.section(3,false,enums.traductionCodeEnum.Destiny,enums.traductionCodeEnum.EntrepriseDestiny),
    new components.section(4,false,enums.traductionCodeEnum.Exploration,enums.traductionCodeEnum.EntrepriseExplo)
]);

var aboutPage = pages.PageModule.init({id:enums.PagesEnum.About, on:false,leftSideBar:aboutLeftSideBar,rightSideBar:null,title:'ABOUT',sections:aboutSections});




