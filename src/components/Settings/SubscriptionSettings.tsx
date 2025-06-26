import { useEffect, useState } from "react";
import Button from "../FormComponents/Button";
import { supabase } from "@/lib/supabase";

const SubscriptionSettings = () => {
  const [updateSubscription, setUpdateSubscription] = useState<string>("");
  const [cancelSubscription, setCancelSubscription] = useState<string>("");

  useEffect(() => {
    const getSubscriptionManagementUrls = async () => {
      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();
        if (userError) throw Error("User not logged in");
        if (!user)
          throw Error(
            "User data not found. Try again later, or contact support.",
          );

        const { data, error } = await supabase.functions.invoke(
          "get-paddle-management-urls",
          {
            body: { userId: user.id },
          },
        );

        if (error) throw error;
        setUpdateSubscription(data.update_payment_method_url);
        setCancelSubscription(data.cancel_payment_url);
      } catch (error) {
        console.log(error);
      }
    };
    getSubscriptionManagementUrls();
  }, []);

  return (
    <div className="space-y-6 text-slate-100">
      <h2 className="text-2xl font-bold text-slate-100 md:text-4xl">
        Subscription Settings
      </h2>
      <div className="relative flex w-full flex-col gap-4 md:flex-row">
        <Button
          disabled={!!!updateSubscription}
          onClick={() => window.open(updateSubscription)}
        >
          Update Subscription
        </Button>
        <Button
          disabled={!!!cancelSubscription}
          onClick={() => window.open(cancelSubscription)}
        >
          Cancel Subscription
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionSettings;
