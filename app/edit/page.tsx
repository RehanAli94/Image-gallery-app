"use client";

import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

export default function EditPage({
  searchParams: { publicId },
}: {
  searchParams: {
    publicId: string;
  };
}) {
  const [transformation, settransformation] = useState<
    | undefined
    | "generative-fill"
    | "blur"
    | "border"
    | "grayscale"
    | "removeBackground"
  >();

  const [prompt, setPrompt] = useState("");
  const [pendingprompt, setPendingPrompt] = useState("");
  return (
    <>
      <section className="overflow-hidden" id="galery">
        <div className=" flex flex-col gap-8">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold">Edit {publicId}</h1>
          </div>

          <div className="flex gap-4">
            <Button
              variant="ghost"
              onClick={() => settransformation(undefined)}
            >
              Clear All
            </Button>
            <div className="flex flex-col gap-4">
              <Button
                onClick={() => {
                  settransformation("generative-fill");
                  setPrompt(pendingprompt);
                }}
              >
                Apply Generative Fill
              </Button>
              <Label>Prompt</Label>
              <Input
                placeholder="Add some Prompt"
                value={pendingprompt}
                onChange={(e) => setPendingPrompt(e.currentTarget.value)}
              />
            </div>
            <Button onClick={() => settransformation("blur")}>
              Apply Blur{" "}
            </Button>
            <Button onClick={() => settransformation("border")}>
              Add border{" "}
            </Button>
            <Button onClick={() => settransformation("grayscale")}>
              Convert to Gray
            </Button>
            <Button onClick={() => settransformation("removeBackground")}>
              Remove Background
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <CldImage
              src={publicId}
              width="300"
              height="200"
              alt="Some Image"
            />

            {transformation === "generative-fill" && (
              <CldImage
                className=""
                src={publicId}
                width="2000"
                height="800"
                alt="Some Image"
                crop="pad"
                fillBackground={{
                  prompt,
                }}
              />
            )}

            {transformation === "blur" && (
              <CldImage
                className="blur-sm"
                src={publicId}
                width="1000"
                height="800"
                alt="Some Image"
                
              />
            )}
            {transformation === "border" && (
              <CldImage
                className="border22"
                src={publicId}
                width="1200"
                height="800"
                alt="Some Image"
                
              />
            )}
            {transformation === "grayscale" && (
              <CldImage
                className="grayscale"
                src={publicId}
                width="1000"
                height="800"
                alt="Some Image"
                
              />
            )}
            {transformation === "removeBackground" && (
              <CldImage
                className=""
                src={publicId}
                width="1000"
                height="800"
                alt="Some Image"
                removeBackground
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
