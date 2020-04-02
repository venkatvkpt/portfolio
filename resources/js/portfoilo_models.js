
//pop up models
function openProjectModel(showId){
	document.getElementById('projectModel').style.display = "block";
	$('html').css("overflow","hidden");
	
		$('#proTitle').html(projectTile[showId]);
		$('#projectDesc').html(projectDesc[showId]);
		var work ='<ul>';
		for(var i =0;i < workDetails[showId].length; i++){		
				work +='<li>'+workDetails[showId][i]+'</li>';
		}
		work +='</ul>';
		$('#projectWork').html(work);
		
		var technology ='';
		for(var i =0;i < technologyDetails[showId].length; i++){		
				technology +='<span class="label label-primary work-popup-tag-link">'+technologyDetails[showId][i]+'</span> ';
		}
		$('#projectTechnology').html(technology);
		$('#client').html(clientInfo[showId]);
		$('#duration').html(durationInfo[showId]);
		$('#size').html(sizeInfo[showId]);
		$('#role').html(roleInfo[showId]);
		var webLink =linkInfo[showId][2]+':&nbsp;<a href="'+linkInfo[showId][0]+'" target="_blank" class="portlink">'+linkInfo[showId][1]+'</a>';
		
		$('#webLink').html(webLink);
	
}


function closeNav() {
	$('html').css("overflow","auto");
	$('.closeWork').hide();
}

var projectTile ={
	workeDistrict:"eDistrict (Meeseva)",
	workCSRISR:"CSR ISR (Donor Corner ISMS)",
	workPSP:"Private School Permissions (ISMS)",
	workTIS:"Teacher Information System (ISMS)",
	workEMZ:"eMagazine (ISMS)",
	workEPDS:"Electronic Public Distribution System",
	workTrackAPP:"4GID Employee Tracker Android APP",
	workPDSAPP:"BSFC PDS Bihar Android APP",
	workPPS:"Paddy Procurement System",
	workEMS:"Employee Management Portal",
	WorkBillSoftware:"Mobile Store Billing Software"
};

var projectDesc = {
	workeDistrict:"eDistrict is a State Mission Mode Project under the National e-Governance plan. The main objectives of this project are 'end to end' automated workflow of services through back-end computerization and improving access to government services. <br>Seamless delivery of citizen services by district administration through automation of workflow and help citizens to faster processing of public cases/appeals/grievances. availability of a central data repository for the government resulting in delivery of services to a citizen in an inefficient manner. Unique features of this project are the 100% electronic workflow ensures single point of interaction for the citizen and the certificates are issued through digital signatures and printed by the concerned, Meeseva centre, CSC. <br>These certificates/services are also stamped and signed by the Meeseva/CSC centre and provide real–time status update to applicant through SMS gateway. Verification of Certificates over Internet. Anyone can verify the authenticity of the certificates by providing the unique identification numbers printed on the certificate.", 
	workCSRISR:"To provide information to Citizens wanting to contribute to the cause of education and providing link to payment gateway. Donors are invited either cash or kind to provide facilities to the schools and quality education to the student of schools of Telangana State.<br> School Education-CSR ISR is an initiative to synchronize the Government and CSR ISR initiatives towards creating more amenities and enhancing the quality education in the Government. This is applicable for all school of Government and Government Bodies but except Private Schools.",
	workPSP:"It is desired to have an online application to ease the process of registering private schools and completing all formalities thereby reducing the turnaround time and bringing transparency in the process.• Provide facility to request for affiliation / accreditation Private School Permission• Corresponding workflow for the application approval process• Functionality for the renewal of an existing affiliation which is going to expireshortly• This is applicable for all school of Private Recognized Schools.",
	workTIS:"This module helps teachers update thier information to get benifts",
	workEMZ:"eMagazine is helps school education department to publish their montly information about school events or achievments",
	workEPDS:"EPDS is implementation of automation & monitoring of Public Distribution System (PDS). PDS is responsible for allotment of food gains like rice, wheat in the state of Bihar . BSFC is responsible for logistics,storage,inventory management and supply of food grains. The system operates at four levels State, District, Block and FPS levels. At each of the levels there allotments is decided by the FCPD representative and the allotment decision is passed on the SFC for supply and logistics of grains."
	,workTrackAPP:"This is a employee tracker andriod app. Employee Tracker will help you to track your employee on field. Employee Tracker will give a accurate location where the employee is located. Employee Tracker can also be used as a attendance system for employee who are on field. Every Morning 10 AM is set for attendance from employee side. Employee Tracker also gives location on Google Map"
	,workPDSAPP:"The main idea of the application is monitoring Bihar Fair Price Shop dealers Distribution activities. This application have data entry screens for allows dealers acknowledge they received grain quantities and distributed grain quantities."
	,workPPS:"The Bihar State Civil Supplies Corporation Ltd. (BSFC) has been procuring rice /wheat under Decentralized Procurement (DCP) scheme of Govt. of India since Kharif/Rabi Marketing Season (KMS) 2015-16/RMS 16-17 involving direct purchase of paddy/wheat from farmers & milling it into rice for distribution in various schemes under Public Distribution System (PDS). To purchase paddy/wheat from farmers directly on payment of Minimum Support Price (MSP). Mill paddy into rice and utilize under Public Distribution System (PDS). By this avoid distress sale of paddy /wheat in the State."
	,workEMS:"Our organization has human resources in Bihar. Our organization has different employee management needs, therefore we design exclusive employee management systems that are adapted to managerial requirements. This is designed to assist in strategic planning, and will help ensure the organization is equipped with the right level of human resources for future goals. Also, for those busy executive who are always on the go, our systems come with remote access features, which will allow to manage workforce anytime, at all times. These systems will ultimately allow to better manage resources."
	,WorkBillSoftware:"The project “Billing system” is an application to automate the process of invoice generation for a “Mobile store” .This desktop application is designed considering the Mobile store invoice pdf requriement. This application also administrates its reports and stock inventory."
	};

var workDetails ={
	workeDistrict:["Analysing the design document, Interaction with Team Lead.","Working with Struts to develop business logics and DAO logics.",
	"Involved in the database design phase.","Customizing the CSS for design the web pages to maintain the uniformity.","Involved in the code enhancement and Unit Testing.",
	"Involved in the testing phases to fix defects.","Generated PDF’s such as invoice using ITEXT libraries.","Also worked on multiple enhancements."],
	workCSRISR:["Gather the business requirements, propose solutions and prepare design document.","Involved in the front-end design and back-end design to develop complete structure of the web pages.",
	"Working with Spring Framework based on MVC architecture.","Developed a custom TLD tag for which takes a query and generate a report.",
	"Involved Working with MS SQL database to fetching and inserting data by using SQL.","Involved in the ISMS portal development from very initial stage of design to implementation.",
	"Involved in the multiple testing phases to fix defects."],
	workPSP:["Analysing the design document, Interaction with Team Lead","Involved in the development phase to develop business logics and DAO logics.",
	"Involved in the database design phase.","Customizing the CSS for design the Web Pages to maintain the Uniformity.",
	"Involved in the code enhancement and Unit Testing.","Involved in the testing phases to fix defects."],
	workTIS:["Analysing the design document, Interaction with Team Lead","Involved in the development phase to develop business logics and DAO logics.",
	"Involved in the database design phase.","Customizing the CSS for design the Web Pages to maintain the Uniformity.",
	"Involved in the code enhancement and Unit Testing.","Involved in the testing phases to fix defects."],
	workEMZ:["Analysing the design document, Interaction with Team Lead","Involved in the development phase to develop business logics and DAO logics.",
	"Involved in the database design phase.","Customizing the CSS for design the Web Pages to maintain the Uniformity.",
	"Involved in the code enhancement and Unit Testing.","Involved in the testing phases to fix defects."],
	workEPDS:["Analysing the design document, Interaction with Team Lead","Involved in the development phase to develop business logics and DAO logics.",
	"Involved in the database design phase.","Customizing the CSS for design the Web Pages to maintain the Uniformity.",
	"Involved in the code enhancement and Unit Testing.","Involved in the testing phases to fix defects."],
	workTrackAPP:["Analyzing the SRS document","Working with Android SDK",
	"Designing Screens using XML's and developing functionality using Java","Integrating  Google Maps API",
	"Developing Rest web services for storing data in Database","Preparing documentation for application release"],
	workPDSAPP:["Analyzing the SRS document","Working with Android SDK",
	"Designing Screens using XML's and developing functionality using Java","Integrating  Google Maps API",
	"Developing Rest web services for storing data in Database","Preparing documentation for application release"],
	workPPS:["Analysing the design document, Interaction with Team Lead","Involved in the development phase to develop business logics and DAO logics.",
	"Involved in the database design phase.","Customizing the CSS for design the Web Pages to maintain the Uniformity.",
	"Involved in the code enhancement and Unit Testing.","Involved in the testing phases to fix defects."],
	workEMS:["Analyzing the design document, Interaction with Team Lead","Full stack development","Involved Every where","Involved in Unit Testing"],
	WorkBillSoftware:["Full stack development,Involved Every where","Designed user manual document"]
};

var CMNTH =[ "Java","Struts","Spring MVC","IText","JSP","HTML", "CSS","Bootstrap","JavaScript", "jQuery","XML","SqLite","Oracle10g","PostgreSQL","MS SQL","Apache Tiles"];
var technologyDetails ={
	workeDistrict:[ CMNTH[0],CMNTH[1],CMNTH[3],"Soap API",CMNTH[4],CMNTH[5],CMNTH[6],CMNTH[7],CMNTH[8],CMNTH[9],CMNTH[13]],
	workCSRISR:[ CMNTH[0],CMNTH[2],CMNTH[3],CMNTH[15],"Hibernate",CMNTH[4],CMNTH[5],CMNTH[6],CMNTH[7],CMNTH[8],CMNTH[9],CMNTH[14]],
	workPSP:[ CMNTH[0],CMNTH[2],CMNTH[3],CMNTH[15],"Hibernate",CMNTH[4],CMNTH[5],CMNTH[6],CMNTH[7],CMNTH[8],CMNTH[9],CMNTH[14]],
	workTIS:[ CMNTH[0],CMNTH[2],CMNTH[3],CMNTH[15],"Hibernate",CMNTH[4],CMNTH[5],CMNTH[6],CMNTH[7],CMNTH[8],CMNTH[9],CMNTH[14]],
	workEMZ:[ CMNTH[0],CMNTH[2],CMNTH[3],CMNTH[15],"Hibernate",CMNTH[4],CMNTH[5],CMNTH[6],CMNTH[7],CMNTH[8],CMNTH[9],CMNTH[14]],
	workEPDS:[ CMNTH[0],CMNTH[1],CMNTH[15],CMNTH[4],CMNTH[5],CMNTH[6],CMNTH[7],CMNTH[8],CMNTH[9],CMNTH[12]],
	workTrackAPP:[ CMNTH[0],"Android","Google Maps API",CMNTH[10],CMNTH[11],"Spring Rest",CMNTH[12]],
	workPDSAPP:[ CMNTH[0],"Android",CMNTH[10],CMNTH[11],"Spring Rest",CMNTH[12]],
	workPPS:[ CMNTH[0],CMNTH[1],CMNTH[15],CMNTH[4],CMNTH[5],CMNTH[6],CMNTH[7],CMNTH[8],CMNTH[9],CMNTH[12]],
	workEMS:[ CMNTH[0],CMNTH[2],CMNTH[15],CMNTH[4],CMNTH[5],CMNTH[6],CMNTH[7],CMNTH[8],CMNTH[9],CMNTH[12]],
	WorkBillSoftware:["Java","Java FX","XML","SqLite"]
};

var clientInfo ={
	workeDistrict:"ESD Meeseva",
	workCSRISR:"Telangana School Education Department",
	workPSP:"Telangana School Education Department",
	workTIS:"Telangana School Education Department",
	workEMZ:"Telangana School Education Department",
	workEPDS:"Bihar State Food Corporation",
	workTrackAPP:"Bihar Government(BSFC)",
	workPDSAPP:"Bihar Government(BSFC)",
	workPPS:"Bihar State Food Corporation",
	workEMS:"4G Identity Solutions",
	WorkBillSoftware:"Mr.Sai Ram G"
};

var durationInfo ={
	workeDistrict:"Dec,2018 - till",
	workCSRISR:"Feb,2019 - Apr,2019",
	workPSP:"Apr,2019 - Aug,2019",
	workTIS:"Sep,2019 - Nov,2019",
	workEMZ:"Aug,2019",
	workEPDS:"June,2017 - Nov,2018",
	workTrackAPP:"January,2018",
	workPDSAPP:"January,2018",
	workPPS:"August,2016 - January,2017",
	workEMS:"January,2017 - March,2017",
	WorkBillSoftware:"April,2016"
};

var sizeInfo ={
	workeDistrict:"3",
	workCSRISR:"2",
	workPSP:"6",
	workTIS:"3",
	workEMZ:"2",
	workEPDS:"5",
	workTrackAPP:"2",
	workPDSAPP:"1",
	workPPS:"4",
	workEMS:"2",
	WorkBillSoftware:"1"
};

var roleInfo ={
	workeDistrict:"Development and Maintenance",
	workCSRISR:"Development and Maintenance",
	workPSP:"Development and Maintenance",
	workTIS:"Design, Development and Maintenance",
	workEMZ:"Design, Development and Maintenance",
	workEPDS:"Development and Maintenance",
	workTrackAPP:"Design and Development",
	workPDSAPP:"Design and Development",
	workPPS:"Development",
	workEMS:"Design and Development",
	WorkBillSoftware:"Design and Development"
};

var linkInfo ={
	workeDistrict:["https://ap.meeseva.gov.in/DeptPortal/UserInterface/LoginForm.aspx","eDistrict (Meeseva)","Website"],
	workCSRISR:["","CSR ISR (Donor Corner ISMS)","Website"],
	workPSP:["","PSP (ISMS)","Website"],
	workTIS:["","TIS (ISMS)","Website"],
	workEMZ:["","eMagazine (ISMS)","Website"],
	workEPDS:["http://sfc.bihar.gov.in","ePDS","Website"],
	workTrackAPP:["https://play.google.com/store/apps/details?id=com.fourg.trackmyemployees","Tracking App","Play Store"],
	workPDSAPP:["https://play.google.com/store/apps/details?id=in.gov.bihar.sfc.biharepds","BSFC PDS Bihar","Play Store"],
	workPPS:["http://202.65.133.69:90/paddy/login.htm","PPS","Website"],
	workEMS:["http://sfc.bihar.gov.in","EMS","Website"],
	WorkBillSoftware:["https://github.com/venkatvkpt/Mobile-Store-Billing-Software","MSB Software","Github"]
};




