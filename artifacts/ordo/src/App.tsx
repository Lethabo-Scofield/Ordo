import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Privacy from "@/pages/legal/Privacy";
import Terms from "@/pages/legal/Terms";
import Cookies from "@/pages/legal/Cookies";
import Trust from "@/pages/resources/Trust";
import SecurityPage from "@/pages/resources/Security";
import Documentation from "@/pages/resources/Documentation";
import HelpCenter from "@/pages/resources/HelpCenter";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/cookies" component={Cookies} />
      <Route path="/trust" component={Trust} />
      <Route path="/security" component={SecurityPage} />
      <Route path="/documentation" component={Documentation} />
      <Route path="/help" component={HelpCenter} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
