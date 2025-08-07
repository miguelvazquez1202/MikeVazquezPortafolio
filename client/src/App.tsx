import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import ConcertsGallery from "@/pages/concerts-gallery";
import EventosSocialesPage from "@/pages/eventos-sociales";
import RetratosPage from "@/pages/retratos";
import PaisajesPage from "@/pages/paisajes";
import AnimalesPage from "@/pages/animales";
import VideoclipsPage from "@/pages/videoclips";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/conciertos" component={ConcertsGallery} />
      <Route path="/eventos-sociales" component={EventosSocialesPage} />
      <Route path="/retratos" component={RetratosPage} />
      <Route path="/paisajes" component={PaisajesPage} />
      <Route path="/animales" component={AnimalesPage} />
      <Route path="/videoclips" component={VideoclipsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
