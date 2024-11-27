import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import Autoplay from 'embla-carousel-autoplay';
import {  
  CardContent,  
  Card,
  CardHeader,
  CardTitle,
} 
  from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} 
from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20 w-full">
       <section className="text-center">
       <h1 className="items-center justify-center gradient-title font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tighter py-5 flex flex-col">Ahoy Seeker Jobs Ahead.{""}
      <span className="flex items-center gap-2 sm:gap-6">GET HIRED.{""}</span>  
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl">
          Explore thousands of job listings or find the perfect candidate
        </p>
       </section>
       <div className="flex gap-6 justify-center">
        <Link to={"/MyJob"}>
          <Button variant="ghost" size="xl">
            Find Jobs
          </Button>
        </Link>
        <Link to={"/PostJob"}>
          <Button variant="destructive" size="xl">
            Post a Job
          </Button>
        </Link>
      </div>


{/* carousel */}
      <Carousel plugins={ [Autoplay({ delay: 2000, stopOnInteraction: true })]} className="w-full py-10 px-40">
        <CarouselContent className="flex gap-6 sm:gap-20 items-center justify-center">
            {companies.map(({ name, path, id }) => {
                    return (
                      <CarouselItem key={id} className="basis-1/3 lg:basis-1/6">
                        <img
                          src={path}
                          alt={name}
                          className="h-9 sm:h-14 object-contain" />
                      </CarouselItem>
                    );
                    })}
        </CarouselContent>
    </Carousel>
  
{/* banner */}
      <section className="px-40">
      <img
        src="/banner.jpg"
        alt="banner"
        className="w-full object-fill rounded-3xl  " />
        </section>

 {/* cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-40">
        <Card>
        <CardHeader>
          <CardTitle>Jobs</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Search Apply Track Jobs Application, Status, and More</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Employers</CardTitle>
        </CardHeader>
        <CardContent>
          Post jobs, manage applications, and find the best talent.
        </CardContent>
      </Card>
 </section>

{/* Accordion */}
    <section>
          <div className="px-40">
          <Accordion type="single" collapsible>
            {faqs.map((faq) => {
              return (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
    
    </Accordion>
    </div>
</section>

</main>
   
  )
}

export default LandingPage;