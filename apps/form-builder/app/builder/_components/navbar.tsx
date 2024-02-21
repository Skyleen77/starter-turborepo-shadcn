import { Logo } from "@ui/components/global/logo";
import { Button } from "@ui/components/ui/button";
import { Switch } from "@ui/components/ui/switch";
import { Label } from "@ui/components/ui/label";
import {
  Blocks,
  Eye,
  Laptop,
  Network,
  Redo2,
  Smartphone,
  Tablet,
  Undo2,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/components/ui/select";

export const Navbar = () => {
  return (
    <div className="flex items-center w-full h-16 px-4 bg-white border-b border-gray-200 dark:border-gray-800 dark:bg-gray-950">
      <div className="flex flex-1">
        <Logo size="md" className="block dark:hidden" />
        <Logo size="md" theme="dark" className="hidden dark:block" />
      </div>

      <div className="flex flex-row gap-x-1">
        <Button size="icon" variant="ghost-active">
          <Laptop />
        </Button>
        <Button size="icon" variant="ghost">
          <Tablet />
        </Button>
        <Button size="icon" variant="ghost">
          <Smartphone />
        </Button>
      </div>

      <div className="flex flex-1">
        <div className="flex flex-row ml-auto gap-x-1">
          <Button size="icon" variant="ghost">
            <Undo2 />
          </Button>
          <Button size="icon" variant="ghost">
            <Redo2 />
          </Button>

          <Select value="build">
            <SelectTrigger className="w-[180px] ml-1 flex flex-row gap-x-2">
              <SelectValue placeholder="Mode" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="build">
                <span className="flex flex-row items-center h-full gap-x-2">
                  <Blocks className="w-5 h-5" /> Build
                </span>
              </SelectItem>
              <SelectItem value="preview">
                <span className="flex flex-row items-center h-full gap-x-2">
                  <Eye className="w-5 h-5" /> Preview
                </span>
              </SelectItem>
              <SelectItem value="graph">
                <span className="flex flex-row items-center h-full gap-x-2">
                  <Network className="w-5 h-5" /> Flow
                </span>
              </SelectItem>
            </SelectContent>
          </Select>

          <div className="flex items-center px-4 space-x-2">
            <Label htmlFor="publish">Draft</Label>
            <Switch id="publish" />
            <Label htmlFor="publish">Publish</Label>
          </div>

          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
};
