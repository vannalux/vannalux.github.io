// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("https://vannalux.github.io/index.html", "Стильные мебельные изделия для дома", "        Стильные мебельные изделия для дома                                                                            Interior Design                                              Interior Design That Feels Like Home  We create thoughtful interiors that balance beauty, comfort, and functionality From concept to completion, our designs are tailored to the way you live  READ MORE                                                                          Design With Purpose  Every space tells a story Our approach blends timeless aesthetics with modern living, creating interiors that feel intentional, personal, and effortlessly elegant  READ MORE                      Let’s bring your ideas to life            Whether you’re refreshing a single room or reimagining an entire home, we guide you through every step of the process Clear communication, creative solutions, and attention to detail define our work  READ MORE                      Inspired by real spaces and real lives, our designs are created to be lived in—comfortable, functional, and uniquely yours                                                                              Residential Interiors  Warm, inviting homes designed around your lifestyle We focus on flow, comfort, and materials that stand the test of time          Commercial Spaces  From studios to boutiques, we design spaces that reflect your brand and create meaningful experiences for clients and customers                                                        Timeless Design, Thoughtfully Crafted        Our philosophy is simple  beautiful spaces should also be practical We combine form and function to deliver interiors that feel balanced, calm, and intentional  READ MORE                        Selected Projects      A glimpse into spaces we’ve designed with care and intention                                                                Contact Us                                        © Copyright                    Home  About&nbsp Us  Projects  Blog  Service                                                                           ", "Стильные мебельные изделия для дома помогут создать комфортную обстановку в вашем пространстве, и выбрать идеальные предметы для вашего интерьера.");
   return this;
}
